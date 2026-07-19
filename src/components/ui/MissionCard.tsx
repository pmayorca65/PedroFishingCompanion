import GlassCard from "./GlassCard";
import { getRecommendation } from "../../services/RecommendationService";

export default function MissionCard() {
  const rec = getRecommendation();

  return (
    <GlassCard>
      <div
        style={{
          color: "#8BE34A",
          fontSize: 24,
          fontWeight: 700,
          marginBottom: 20,
        }}
      >
        TODAY'S MISSION
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 18,
        }}
      >
        <Field title="Species" value={rec.species} />
        <Field title="Lake" value={rec.lakeName} />
        <Field title="Access" value={rec.accessPointName} />
        <Field title="Technique" value={rec.technique} />
        <Field title="Depth" value={rec.depth} />
        <Field title="Confidence" value={rec.confidence} />
      </div>

      <div
        style={{
          marginTop: 22,
          color: "#B9C8D5",
          fontSize: 14,
          lineHeight: 1.5,
        }}
      >
        {rec.reason.map((r) => (
          <div key={r}>• {r}</div>
        ))}
      </div>

      <button
        style={{
          width: "100%",
          marginTop: 22,
          height: 54,
          borderRadius: 16,
          border: "none",
          background: "#53D769",
          color: "#06220E",
          fontSize: 18,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Navigate
      </button>
    </GlassCard>
  );
}

function Field({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <div
        style={{
          color: "#91A4B7",
          fontSize: 13,
          marginBottom: 3,
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#FFFFFF",
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        {value}
      </div>
    </div>
  );
}