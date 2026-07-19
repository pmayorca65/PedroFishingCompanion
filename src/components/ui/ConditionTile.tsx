import type { ReactNode } from "react";

interface ConditionTileProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export default function ConditionTile({
  icon,
  label,
  value,
}: ConditionTileProps) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,.06)",
        border: "1px solid rgba(90,185,255,.18)",
        borderRadius: 22,

        padding: 16,

        minHeight: 145,

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      <div
        style={{
          width: 54,
          height: 54,

          borderRadius: 16,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          background:
            "linear-gradient(180deg, rgba(41,213,246,.20), rgba(41,213,246,.10))",

          border: "1px solid rgba(41,213,246,.25)",

          color: "#29D5F6",

          fontSize: 24,
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
          {label}
        </div>

        <div
          style={{
            color: "white",
            fontSize: 24,
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