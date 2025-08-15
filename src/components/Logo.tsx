export default function Logo({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  // Modern siyah tema için tek renkli, altıgen içinde "C" benzeri işaret
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      role="img"
    >
      <path
        d="M32 4 8 18v28l24 14 24-14V18L32 4z"
        fill="none"
        stroke="#EDEDED"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41 24a12 12 0 1 0 0 16"
        fill="none"
        stroke="#60A5FA"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
