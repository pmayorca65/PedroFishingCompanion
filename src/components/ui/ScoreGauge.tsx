interface ScoreGaugeProps {
  score: number;
  rating: string;
}

export default function ScoreGauge({
  score,
  rating,
}: ScoreGaugeProps) {
  const radius = 70;
  const stroke = 12;

  const normalizedRadius = radius - stroke / 2;

  const circumference =
    normalizedRadius * 2 * Math.PI;

  const offset =
    circumference -
    (score / 100) * circumference;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 0 4px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 160,
          height: 160,
        }}
      >
        <svg
          width="160"
          height="160"
        >
          <circle
            cx="80"
            cy="80"
            r={normalizedRadius}
            stroke="rgba(255,255,255,.10)"
            strokeWidth={stroke}
            fill="none"
          />

          <circle
            cx="80"
            cy="80"
            r={normalizedRadius}
            stroke="#9BE236"
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 80 80)"
          />
        </svg>

        <div
          style={{
            position: "absolute",
            inset: 0,

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: "#9BE236",
              lineHeight: 1,
            }}
          >
            {score}%
          </div>

          <div
            style={{
              marginTop: 6,
              color: "white",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
}