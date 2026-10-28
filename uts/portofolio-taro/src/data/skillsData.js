// Dikelompokkan seperti daftar "Everything installed" — satu grup = satu baris.
// kanji: glyph kecil di kiri judul grup.
export const skillGroups = [
  {
    id: 'core',
    kanji: '核',
    title: 'Core languages & frameworks',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'React', 'Laravel', 'QML'],
  },
  {
    id: 'tools',
    kanji: '具',
    title: 'Tools I use daily',
    items: ['Git & GitHub', 'Figma', 'Vercel', 'Supabase'],
  },
  {
    id: 'desktop',
    kanji: '机',
    title: 'Desktop & homelab',
    items: ['Linux', 'Hyprland', 'Quickshell', 'pywal', 'Docker', 'Shell Script'],
  },
  {
    id: 'exploring',
    kanji: '探',
    title: 'Currently exploring',
    items: ['IoT', 'Data Mining', 'TypeScript', 'Next.js', 'Node.js', 'Flutter', 'SQL Databases', 'Java / C / C++ / C#'],
  },
];

export const totalSkills = skillGroups.reduce((sum, g) => sum + g.items.length, 0);
