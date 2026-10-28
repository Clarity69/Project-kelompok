import { useEffect, useState } from 'react';
import DitherImage from './DitherImage';

/**
 * Kanji besar yang dirender ke canvas lalu dijadikan halftone oleh DitherImage.
 * Glyph diberi cahaya dari kiri atas + pinggiran lembut, supaya titiknya punya
 * gradasi (kalau rata, halftone terlihat seperti blok datar).
 *
 * glyphs: string, tiap karakter = satu baris (vertikal, seperti tulisan Jepang)
 */
const FONT_FAMILY = '"Noto Serif JP", "Noto Serif CJK JP", "Noto Serif CJK TC", serif';

function renderGlyphs(glyphs) {
  const chars = [...glyphs];
  const size = 1000; // px per glyph di canvas sumber
  const W = Math.round(size * 1.15);
  const H = Math.round(size * chars.length * 1.02 + size * 0.4);

  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, W, H);

  // 1) glyph putih
  const glyph = document.createElement('canvas');
  glyph.width = W;
  glyph.height = H;
  const g = glyph.getContext('2d');
  g.fillStyle = '#fff';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = `600 ${size}px ${FONT_FAMILY}`;
  chars.forEach((ch, i) => {
    g.fillText(ch, W / 2, size * 0.78 + i * size * 1.02);
  });

  // 2) bayangan lembut di belakang glyph → titik kecil "memudar" di tepi
  ctx.filter = 'blur(28px)';
  ctx.globalAlpha = 0.35;
  ctx.drawImage(glyph, 0, 0);
  ctx.filter = 'none';
  ctx.globalAlpha = 1;
  ctx.drawImage(glyph, 0, 0);

  // 3) cahaya: terang di kiri atas, gelap ke kanan bawah (hanya di area glyph)
  ctx.globalCompositeOperation = 'multiply';
  const light = ctx.createLinearGradient(0, 0, W * 0.9, H);
  light.addColorStop(0, '#ffffff');
  light.addColorStop(0.55, '#9a9a9a');
  light.addColorStop(1, '#3a3a3a');
  ctx.fillStyle = light;
  ctx.fillRect(0, 0, W, H);

  // 4) sedikit tekstur goresan kuas (garis diagonal tipis)
  ctx.globalCompositeOperation = 'multiply';
  ctx.strokeStyle = 'rgba(0,0,0,0.22)';
  ctx.lineWidth = 6;
  for (let x = -H; x < W; x += 38) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + H * 0.35, H);
    ctx.stroke();
  }
  ctx.globalCompositeOperation = 'source-over';

  return c.toDataURL('image/png');
}

export default function KanjiArt({ glyphs, alt, className = '', ...ditherProps }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    let alive = true;
    const draw = () => alive && setSrc(renderGlyphs(glyphs));
    // Tunggu font Jepang termuat, kalau tidak glyph digambar pakai font cadangan
    const ready = document.fonts?.load
      ? document.fonts.load(`600 200px "Noto Serif JP"`, glyphs).catch(() => {})
      : Promise.resolve();
    const timeout = new Promise((r) => setTimeout(r, 2500));
    Promise.race([ready, timeout]).then(draw);
    return () => {
      alive = false;
    };
  }, [glyphs]);

  if (!src) return <div className={className} role="img" aria-label={alt} />;
  return <DitherImage src={src} alt={alt} className={className} {...ditherProps} />;
}
