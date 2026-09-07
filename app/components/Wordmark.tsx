export function Wordmark({
  size = 46,
  className = "",
  tone = "ink",
}: {
  size?: number;
  className?: string;
  tone?: "ink" | "cream";
}) {
  const tree =
    "M26 2 33 14 30 14 37.5 24 33.5 24 42 34 10 34 18.5 24 14.5 24 22 14 19 14Z";
  return (
    <svg
      width={size}
      height={Math.round((size * 39) / 46)}
      viewBox="0 0 54 46"
      aria-hidden="true"
      className={`block ${tone === "cream" ? "text-ground" : "text-ink"} ${className}`}
    >
      <g fill="currentColor">
        <g transform="translate(-4,11) scale(0.66)">
          <path d={tree} />
          <path d="M24 33h4v9h-4z" />
        </g>
        <g>
          <path d={tree} />
          <path d="M24 33h4v10h-4z" />
        </g>
        <g transform="translate(26,14) scale(0.58)">
          <path d={tree} />
          <path d="M24 33h4v9h-4z" />
        </g>
      </g>
    </svg>
  );
}
