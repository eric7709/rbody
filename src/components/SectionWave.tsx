type Props = {
  tone?: "white" | "blush" | "charcoal";
  flip?: boolean;
};

export default function SectionWave({ tone = "white", flip = false }: Props) {
  const fillMap: Record<string, string> = {
    white: "#FFFFFF",
    blush: "#F8EDEF",
    charcoal: "#333333",
  };
  const fill = fillMap[tone];

  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="h-12 w-full md:h-16"
      >
        <path
          d="M0,40 C150,10 250,70 400,45 C550,20 650,55 800,35 C950,15 1050,55 1200,30 L1200,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
