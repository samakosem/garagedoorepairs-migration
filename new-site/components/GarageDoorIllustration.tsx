export default function GarageDoorIllustration() {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <rect x="20" y="16" width="360" height="288" rx="14" fill="#1e293b" />
      <rect x="20" y="16" width="360" height="288" rx="14" stroke="#334155" strokeWidth="2" />

      <rect x="44" y="40" width="312" height="240" rx="6" fill="#0f172a" />

      {[0, 1, 2, 3, 4].map((row) => (
        <g key={row}>
          <rect
            x="50"
            y={46 + row * 48}
            width="300"
            height="40"
            rx="4"
            fill={row % 2 === 0 ? "#27344a" : "#222e42"}
            stroke="#374151"
            strokeWidth="1"
          />
          <line
            x1="50"
            y1={66 + row * 48}
            x2="350"
            y2={66 + row * 48}
            stroke="#1c2434"
            strokeWidth="1.5"
          />
          <circle cx="64" cy={66 + row * 48} r="3.5" fill="#475569" />
          <circle cx="336" cy={66 + row * 48} r="3.5" fill="#475569" />
        </g>
      ))}

      <rect x="170" y="100" width="60" height="60" rx="6" fill="#f97316" fillOpacity="0.12" />
      <rect
        x="170"
        y="100"
        width="60"
        height="60"
        rx="6"
        stroke="#fb923c"
        strokeWidth="2"
        strokeDasharray="6 5"
      />
      <path
        d="M200 116v28M188 130h24"
        stroke="#fb923c"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <rect x="14" y="10" width="14" height="300" rx="4" fill="#334155" />
      <rect x="372" y="10" width="14" height="300" rx="4" fill="#334155" />

      <circle cx="21" cy="30" r="3" fill="#64748b" />
      <circle cx="21" cy="290" r="3" fill="#64748b" />
      <circle cx="379" cy="30" r="3" fill="#64748b" />
      <circle cx="379" cy="290" r="3" fill="#64748b" />
    </svg>
  );
}
