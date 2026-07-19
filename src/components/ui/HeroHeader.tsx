import { FaMapMarkerAlt } from "react-icons/fa";

interface HeroHeaderProps {
  city: string;
  province: string;
  onRefreshLocation: () => void;
}

export default function HeroHeader({
  city,
  province,
  onRefreshLocation,
}: HeroHeaderProps) {
  return (
    <div
      style={{
        padding: "22px 20px 18px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "#C4D3DF",
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          <FaMapMarkerAlt />

          {city
            ? `${city}${province ? ", " + province : ""}`
            : "Locating..."}
        </div>

        <button
          onClick={onRefreshLocation}
          style={{
            border: "none",
            borderRadius: 18,
            padding: "8px 16px",
            background: "rgba(255,255,255,.10)",
            color: "white",
            fontWeight: 600,
            fontSize: 13,
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            cursor: "pointer",
          }}
        >
          My Location
        </button>
      </div>

      <div
        style={{
          color: "#C6D4DE",
          fontSize: 21,
          fontWeight: 500,
          marginBottom: 2,
        }}
      >
        Good Morning
      </div>

      <div
        style={{
          color: "white",
          fontSize: 52,
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: -1,
        }}
      >
        Pedro
      </div>

      <div
        style={{
          marginTop: 8,
          color: "#29D5F6",
          fontSize: 18,
        }}
      >
        Let's catch some fish today.
      </div>
    </div>
  );
}