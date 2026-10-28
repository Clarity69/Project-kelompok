export default function Footer({ profile }) {
    return (
        <footer className="pb-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-[var(--muted)] sm:flex-row sm:px-6">
                <p>© {new Date().getFullYear()} {profile.name}</p>
                <p>Dibuat dengan React.js</p>
            </div>
        </footer>
    );
}
