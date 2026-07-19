import type { ReactNode } from "react";

interface SummaryTileProps {
  icon: ReactNode;
  title: string;
  value: string;
}

export default function SummaryTile({
  icon,
  title,
  value,
}: SummaryTileProps) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,.06)",
        border: "1px solid rgba(90,185,255,.18)",
        borderRadius: 22,

        padding: 16,

        minHeight: 135,

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,

          borderRadius: 16,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          background:
            "linear-gradient(180deg, rgba(41,213,246,.20), rgba(41,213,246,.10))",

          border: "1px solid rgba(41,213,246,.25)",

          color: "#29D5F6",

          fontSize: 22,
        }}
      >
        {icon}
      </div>

      <div>
        <div
          style={{
            color: "#A8BCCD",
            fontSize: 14,
            marginBottom: 6,
          }}
        >
          {title}
        </div>

        <div
          style={{
            color: "white",
            fontSize: 26,
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}