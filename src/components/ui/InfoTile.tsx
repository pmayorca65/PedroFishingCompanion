interface InfoTileProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export default function InfoTile({
  icon,
  value,
  label,
}: InfoTileProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,

        padding: "16px 18px",

        background: "rgba(255,255,255,.06)",

        border: "1px solid rgba(130,205,255,.15)",

        borderRadius: 20,

        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",

        transition: "all .25s ease",
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,

          borderRadius: 16,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          background:
            "linear-gradient(180deg, rgba(41,213,246,.22), rgba(41,213,246,.10))",

          border: "1px solid rgba(41,213,246,.25)",

          color: "#29D5F6",

          fontSize: 24,

          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      <div
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            color: "#9FB4C8",

            fontSize: 13,

            fontWeight: 500,

            letterSpacing: ".5px",

            marginBottom: 4,
          }}
        >
          {label}
        </div>

        <div
          style={{
            color: "#FFFFFF",

            fontSize: 20,

            fontWeight: 700,

            lineHeight: 1.2,

            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}