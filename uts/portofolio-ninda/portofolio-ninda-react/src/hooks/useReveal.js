import { useEffect } from 'react';

/** Menambahkan class "show" ke elemen .reveal ketika masuk ke layar. */
export default function useReveal(deps = []) {
    useEffect(() => {
        const els = document.querySelectorAll('.reveal:not(.show)');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 },
        );
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}
