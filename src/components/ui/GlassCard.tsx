import type { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  style?: CSSProperties;
}

export default function GlassCard({
  children,
  style,
}: GlassCardProps) {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(12,32,54,.52) 0%, rgba(6,18,34,.68) 100%)",

        backdropFilter: "blur(26px)",
        WebkitBackdropFilter: "blur(26px)",

        border: "1.5px solid rgba(90,185,255,.35)",

        borderRadius: 28,

        padding: 24,

        boxShadow:
          "0 10px 30px rgba(0,0,0,.28), 0 20px 55px rgba(0,0,0,.38)",

        overflow: "hidden",

        position: "relative",

        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "rgba(255,255,255,.18)",
        }}
      />

      {children}
    </div>
  );
}