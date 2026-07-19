import { useEffect, useState } from "react";

import HeroHeader from "../components/ui/HeroHeader";
import GlassCard from "../components/ui/GlassCard";
import ConditionTile from "../components/ui/ConditionTile";
import SummaryTile from "../components/ui/SummaryTile";
import ScoreGauge from "../components/ui/ScoreGauge";
import BottomNav from "../components/BottomNav";

import {
  FaTemperatureHigh,
  FaWind,
  FaMoon,
  FaSun,
  FaMapMarkerAlt,
  FaFish,
  FaClock,
} from "react-icons/fa";

import { getCurrentLocation } from "../services/LocationService";

import { getWeather } from "../services/WeatherService";
import type { WeatherData } from "../services/WeatherService";

import { getMoonPhase } from "../services/MoonService";

import { calculateFishingScore } from "../services/FishingScoreService";
import type { FishingScore } from "../services/FishingScoreService";

import { getRecommendation } from "../services/RecommendationService";
import type { Recommendation } from "../services/RecommendationService";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const [score, setScore] = useState<FishingScore | null>(null);

  const [city, setCity] = useState("");

  const [province, setProvince] = useState("");

  const [recommendation] =
    useState<Recommendation>(getRecommendation());

  const moon = getMoonPhase();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const location = await getCurrentLocation();

      setCity(location.city);
      setProvince(location.province);

      const weatherData = await getWeather(
        location.latitude,
        location.longitude
      );

      setWeather(weatherData);

      setScore(calculateFishingScore(weatherData));
    } catch (error) {
      console.error(error);
    }
  }

  function SectionTitle({
    text,
  }: {
    text: string;
  }) {
    return (
      <div
        style={{
          color: "#29D5F6",
          fontWeight: 700,
          fontSize: 21,
          marginBottom: 14,
        }}
      >
        {text}
      </div>
    );
  }

  return (
    <div
      className="appBackground"
      style={{
        minHeight: "100vh",
        paddingBottom: 100,
      }}
    >
      <HeroHeader
        city={city}
        province={province}
        onRefreshLocation={loadData}
      />

      <div
        style={{
          padding: "0 16px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >

        <GlassCard>

          <SectionTitle text="CURRENT CONDITIONS" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
            }}
          >

            <ConditionTile
              icon={<FaTemperatureHigh />}
              label="Temperature"
              value={
                weather
                  ? `${weather.temperature.toFixed(1)}°C`
                  : "--"
              }
            />

            <ConditionTile
              icon={<FaWind />}
              label="Wind"
              value={
                weather
                  ? `${weather.windSpeed.toFixed(1)} km/h`
                  : "--"
              }
            />

            <ConditionTile
              icon={<FaMoon />}
              label="Moon"
              value={moon.phase}
            />

            <ConditionTile
              icon={<FaSun />}
              label="Sunrise"
              value={weather?.sunrise ?? "--"}
            />

          </div>

        </GlassCard>

        <GlassCard>

          <SectionTitle text="FISHING SCORE" />

          <ScoreGauge
            score={score?.score ?? 0}
            rating={score?.rating ?? "--"}
          />

        </GlassCard>
                <GlassCard>

          <SectionTitle text="TODAY'S BEST LOCATION" />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,

              padding: 16,

              borderRadius: 18,

              background: "rgba(255,255,255,.05)",

              border:
                "1px solid rgba(90,185,255,.18)",
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

                border:
                  "1px solid rgba(41,213,246,.25)",

                color: "#29D5F6",

                fontSize: 24,
              }}
            >
              <FaMapMarkerAlt />
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {recommendation.lakeName}
              </div>

              <div
                style={{
                  color: "#A8BCCD",
                  fontSize: 14,
                  marginTop: 4,
                }}
              >
                {recommendation.accessPointName}
              </div>
            </div>
          </div>

          <button
            style={{
              marginTop: 14,

              width: "100%",
              height: 54,

              border: "none",
              borderRadius: 18,

              background:
                "linear-gradient(90deg,#9BE236,#49D86E)",

              color: "#07141E",

              fontWeight: 800,
              fontSize: 20,

              cursor: "pointer",
            }}
          >
            NAVIGATE
          </button>

        </GlassCard>

        <GlassCard>

          <SectionTitle text="QUICK FISHING SUMMARY" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
            }}
          >

            <SummaryTile
              icon={<FaFish />}
              title="Target Fish"
              value={recommendation.species}
            />

            <SummaryTile
              icon={<FaFish />}
              title="Technique"
              value={recommendation.technique}
            />

            <SummaryTile
              icon={<FaFish />}
              title="Lure"
              value={recommendation.lure}
            />

            <SummaryTile
              icon={<FaClock />}
              title="Best Time"
              value={recommendation.bestTime}
            />

          </div>

        </GlassCard>

      </div>

      <BottomNav />

    </div>
  );
}