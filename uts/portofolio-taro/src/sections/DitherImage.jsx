import { useEffect, useRef } from 'react';
import useTheme from '../context/useTheme';
import styles from '../components/dither.module.css';

/**
 * Gambar → halftone/dither di <canvas>, digambar dengan warna --ink tema aktif.
 *
 * - Titik besar  : area terang (bulatan halftone, ukuran ~ kecerahan)
 * - Titik kecil  : area gelap diisi pola Bayer 4x4 (tekstur dither halus)
 * - Intro        : titik "dicetak" dari atas ke bawah saat pertama tampil
 * - Kursor       : titik di sekitar kursor membesar seperti lensa
 *
 * Props:
 *  src       gambar sumber (sebaiknya grayscale, latar gelap)
 *  alt       teks alternatif
 *  cell      jarak antar titik dalam px CSS
 *  focus     [x, y] 0..1 — titik fokus crop "cover"
 *  fit       'cover' | 'contain'
 *  zoom      perbesar di atas fit (crop detail), 1 = normal
 *  levels    [hitam, putih] 0..1 — titik hitam/putih sebelum gamma
 *  gamma     <1 = lebih terang, >1 = lebih kontras
 *  fade      porsi bawah gambar yang memudar (0..1)
 *  interactive  aktifkan efek lensa kursor
 */
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16);

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function DitherImage({
  src,
  alt = '',
  cell = 7,
  focus = [0.5, 0.5],
  fit = 'cover',
  zoom = 1,
  levels = [0.04, 0.82],
  gamma = 0.9,
  fade = 0.25,
  interactive = true,
  className = '',
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const state = useRef({
    img: null,
    values: null,
    delays: null,
    cols: 0,
    rows: 0,
    w: 0,
    h: 0,
    color: '#cbc2b9',
    start: 0,
    pointer: { x: -9999, y: -9999, strength: 0, target: 0 },
    raf: 0,
  });
  const { theme } = useTheme();

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const s = state.current;
    const ctx = canvas.getContext('2d');
    let disposed = false;

    // Ambil sampel kecerahan per sel dari gambar
    const sample = () => {
      if (!s.img || !s.w || !s.h) return;
      // Di layar kecil titik ikut mengecil, supaya wajah tetap terbaca (min ~90 kolom)
      const c = Math.max(3, Math.min(cell, s.w / 90));
      s.cell = c;
      const cols = Math.ceil(s.w / c);
      const rows = Math.ceil(s.h / c);
      const off = document.createElement('canvas');
      off.width = cols;
      off.height = rows;
      const octx = off.getContext('2d', { willReadFrequently: true });

      const iw = s.img.naturalWidth;
      const ih = s.img.naturalHeight;
      const scale =
        (fit === 'cover' ? Math.max(cols / iw, rows / ih) : Math.min(cols / iw, rows / ih)) * zoom;
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cols - dw) * focus[0];
      const dy = (rows - dh) * focus[1];
      octx.fillStyle = '#000';
      octx.fillRect(0, 0, cols, rows);
      octx.imageSmoothingQuality = 'high';
      octx.drawImage(s.img, dx, dy, dw, dh);

      const data = octx.getImageData(0, 0, cols, rows).data;
      const values = new Float32Array(cols * rows);
      const delays = new Float32Array(cols * rows);
      const [lo, hi] = levels;
      const fadeStart = 1 - fade;

      for (let y = 0; y < rows; y++) {
        const fy = y / rows;
        const fadeMul =
          fade > 0 && fy > fadeStart ? Math.max(0, 1 - (fy - fadeStart) / fade) ** 1.6 : 1;
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          const p = i * 4;
          const lum = (0.299 * data[p] + 0.587 * data[p + 1] + 0.114 * data[p + 2]) / 255;
          let v = Math.min(1, Math.max(0, (lum - lo) / (hi - lo)));
          values[i] = v ** gamma * fadeMul;
          // jeda intro: baris atas lebih dulu, plus sedikit acak supaya organik
          delays[i] = fy * 0.75 + Math.random() * 0.25;
        }
      }
      s.values = values;
      s.delays = delays;
      s.cols = cols;
      s.rows = rows;
    };

    const draw = (now) => {
      s.raf = 0;
      if (disposed || !s.values) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, s.w, s.h);
      ctx.fillStyle = s.color;

      const t = s.start ? Math.min(1, (now - s.start) / 1600) : 1;
      const intro = t < 1;
      const pt = s.pointer;
      pt.strength += (pt.target - pt.strength) * 0.12;
      const lensR = Math.max(80, s.w * 0.16);
      const lensR2 = lensR * lensR;
      const cell = s.cell;
      const maxR = cell * 0.58;

      ctx.beginPath();
      for (let y = 0; y < s.rows; y++) {
        const cy = y * cell + cell / 2;
        for (let x = 0; x < s.cols; x++) {
          const i = y * s.cols + x;
          let v = s.values[i];
          if (v < 0.015) continue;

          if (intro) {
            const k = Math.min(1, Math.max(0, (t * 1.35 - s.delays[i]) / 0.35));
            if (k <= 0) continue;
            v *= k;
          }

          const cx = x * cell + cell / 2;

          if (pt.strength > 0.01) {
            const dx = cx - pt.x;
            const dy = cy - pt.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < lensR2) {
              const f = 1 - Math.sqrt(d2) / lensR;
              v = Math.min(1.25, v * (1 + f * f * 0.9 * pt.strength) + f * 0.06 * pt.strength);
            }
          }

          if (v < 0.2) {
            // area gelap → pola Bayer: piksel kecil, bukan bulatan
            if (v * 4.2 > BAYER[(y & 3) * 4 + (x & 3)]) {
              const sz = Math.max(1, cell * 0.22);
              ctx.rect(cx - sz / 2, cy - sz / 2, sz, sz);
            }
          } else {
            const r = maxR * Math.sqrt(v);
            ctx.moveTo(cx + r, cy);
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
          }
        }
      }
      ctx.fill();

      const lensMoving = Math.abs(pt.target - pt.strength) > 0.005 || pt.target > 0;
      if (intro || lensMoving) {
        s.raf = requestAnimationFrame(draw);
      } else {
        s.raf = 0;
      }
    };

    const kick = () => {
      if (!s.raf) s.raf = requestAnimationFrame(draw);
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      s.w = Math.max(1, Math.round(rect.width));
      s.h = Math.max(1, Math.round(rect.height));
      canvas.width = s.w * dpr;
      canvas.height = s.h * dpr;
      canvas.style.width = `${s.w}px`;
      canvas.style.height = `${s.h}px`;
      sample();
      kick();
    };

    const img = new Image();
    img.decoding = 'async';
    img.onload = () => {
      if (disposed) return;
      s.img = img;
      s.start = reducedMotion() ? 0 : performance.now();
      resize();
    };
    img.src = src;

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    // Efek lensa kursor (desktop saja)
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      s.pointer.x = e.clientX - rect.left;
      s.pointer.y = e.clientY - rect.top;
      s.pointer.target = 1;
      kick();
    };
    const onLeave = () => {
      s.pointer.target = 0;
      kick();
    };
    const canHover = window.matchMedia('(hover: hover)').matches;
    if (interactive && canHover && !reducedMotion()) {
      wrap.addEventListener('pointermove', onMove);
      wrap.addEventListener('pointerleave', onLeave);
    }

    s.redraw = kick;

    return () => {
      disposed = true;
      ro.disconnect();
      cancelAnimationFrame(s.raf);
      s.raf = 0;
      wrap.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerleave', onLeave);
    };
  }, [src, cell, fit, zoom, fade, gamma, interactive, focus[0], focus[1], levels[0], levels[1]]); // eslint-disable-line react-hooks/exhaustive-deps

  // Warna titik mengikuti tema (--ink)
  useEffect(() => {
    const s = state.current;
    const read = () => {
      const c = getComputedStyle(canvasRef.current).getPropertyValue('--ink').trim();
      if (c) s.color = c;
      s.redraw?.();
    };
    read();
    // view transition menukar tema sedikit setelah state berubah
    const id = window.setTimeout(read, 60);
    return () => window.clearTimeout(id);
  }, [theme]);

  return (
    <div ref={wrapRef} className={`${styles.wrap} ${className}`}>
      <canvas ref={canvasRef} className={styles.canvas} role="img" aria-label={alt} />
    </div>
  );
}
