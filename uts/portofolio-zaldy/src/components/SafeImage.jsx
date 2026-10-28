import { useState } from 'react';

// <img> yang menyembunyikan dirinya kalau file belum ada (jadi tidak muncul ikon rusak)
export default function SafeImage({ src, alt = '', className, style }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return <img src={src} alt={alt} className={className} style={style} onError={() => setFailed(true)} />;
}
