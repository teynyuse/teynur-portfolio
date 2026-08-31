type DotsProps = {
  className?: string;
};

export default function Dots({ className }: DotsProps) {
  return (
    <svg
      viewBox="0 0 10 30"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="5" cy="5" r="4" fill="currentColor" />
      <circle cx="5" cy="15" r="4" fill="currentColor" />
      <circle cx="5" cy="25" r="4" fill="currentColor" />
    </svg>
  );
}