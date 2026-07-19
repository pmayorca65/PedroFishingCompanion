import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import FishingMap from "../components/FishingMap";

export default function LakeGuide() {
  return (
    <>
      <Header title="Lake Guide" />

      <div style={{ padding: 16 }}>
        <input
          type="text"
          placeholder="Search lake..."
          style={{
            width: "100%",
            padding: 12,
            fontSize: 16,
            marginBottom: 16,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />

        <FishingMap />
      </div>

      <BottomNav />
    </>
  );
}