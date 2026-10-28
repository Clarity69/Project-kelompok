// Ikon garis 16px, stroke 1.5px (aturan Bone & Ink: tanpa ikon berwarna/terisi).
// Semua dekoratif → aria-hidden.
const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const make = (paths) =>
  function Icon({ size = 16, ...props }) {
    return (
      <svg {...base} width={size} height={size} {...props}>
        {paths}
      </svg>
    );
  };

export const IconArrowUpRight = make(<path d="M7 17 17 7M8 7h9v9" />);
export const IconArrowLeft = make(<path d="M19 12H5m6-6-6 6 6 6" />);
export const IconArrowRight = make(<path d="M5 12h14m-6-6 6 6-6 6" />);
export const IconArrowUp = make(<path d="M12 19V5m-6 6 6-6 6 6" />);
export const IconMenu = make(<path d="M4 7h16M4 12h16M4 17h16" />);
export const IconClose = make(<path d="M6 6l12 12M18 6 6 18" />);
export const IconStar = make(
  <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
);
export const IconSun = make(
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </>
);
export const IconMoon = make(<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />);
export const IconGithub = make(
  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
);
export const IconInstagram = make(
  <>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </>
);
export const IconMail = make(
  <>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3 7 9 6 9-6" />
  </>
);
export const IconCopy = make(
  <>
    <rect x="9" y="9" width="12" height="12" rx="1" />
    <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
  </>
);
export const IconExpand = make(<path d="M15 4h5v5M9 20H4v-5M20 4l-6 6M4 20l6-6" />);
export const IconCheck = make(<path d="m5 12 5 5L20 7" />);
export const IconLinkedin = make(
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
    <path d="M2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </>
);
