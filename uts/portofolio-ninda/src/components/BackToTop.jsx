import { useEffect, useState } from 'react';
import Icon from './Icon';

export default function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 600);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!show) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed right-5 bottom-5 z-30 grid size-12 place-items-center rounded-full bg-[var(--accent)] text-[var(--on-accent)] shadow-lg transition hover:-translate-y-1"
            aria-label="Kembali ke atas"
        >
            <Icon name="arrowUp" />
        </button>
    );
}
