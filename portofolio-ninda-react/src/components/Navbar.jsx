import { useEffect, useState } from 'react';
import Icon from './Icon';
import useTheme from '../hooks/useTheme';

const links = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang' },
    { id: 'pengalaman', label: 'Usaha' },
    { id: 'proyek', label: 'Proyek' },
    { id: 'keahlian', label: 'Keahlian' },
    { id: 'pendidikan', label: 'Pendidikan' },
    { id: 'kontak', label: 'Kontak' },
];

export default function Navbar({ name }) {
    const [dark, toggleTheme] = useTheme();
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('beranda');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            // Tandai menu sesuai bagian yang sedang terlihat
            const current = [...links].reverse().find(({ id }) => {
                const el = document.getElementById(id);
                return el && el.getBoundingClientRect().top <= 120;
            });
            if (current) setActive(current.id);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-40 transition-all ${
                scrolled ? 'border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md' : ''
            }`}
        >
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
                <a href="#beranda" className="font-display text-xl font-bold">
                    {name}<span className="text-[var(--accent)] italic">.</span>
                </a>

                <ul className="hidden items-center gap-1 lg:flex">
                    {links.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                                    active === id
                                        ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
                                        : 'text-[var(--muted)] hover:text-[var(--text)]'
                                }`}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="grid size-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)]"
                        aria-label={dark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'}
                    >
                        <Icon name={dark ? 'sun' : 'moon'} className="size-[18px]" />
                    </button>
                    <button
                        onClick={() => setOpen((o) => !o)}
                        className="grid size-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] lg:hidden"
                        aria-label="Buka menu"
                        aria-expanded={open}
                    >
                        <Icon name={open ? 'close' : 'menu'} className="size-[18px]" />
                    </button>
                </div>
            </nav>

            {open && (
                <ul className="mx-4 mb-3 space-y-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-xl lg:hidden">
                    {links.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={() => setOpen(false)}
                                className={`block rounded-xl px-4 py-2.5 font-medium ${
                                    active === id ? 'bg-[var(--accent-soft)] text-[var(--accent)]' : ''
                                }`}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}
