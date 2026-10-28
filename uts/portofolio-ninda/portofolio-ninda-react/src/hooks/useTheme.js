import { useEffect, useState } from 'react';

/** Mode gelap/terang, disimpan di localStorage. */
export default function useTheme() {
    const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
        try {
            localStorage.setItem('theme', dark ? 'dark' : 'light');
        } catch (e) {
            /* abaikan bila localStorage tidak tersedia */
        }
    }, [dark]);

    return [dark, () => setDark((d) => !d)];
}
