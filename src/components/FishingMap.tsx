import {
  Map,
  AdvancedMarker,
  useMap,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import { Geolocation } from "@capacitor/geolocation";

type LatLng = {
  lat: number;
  lng: number;
};

function RecenterButton({
  position,
  refreshLocation,
}: {
  position: LatLng;
  refreshLocation: () => Promise<void>;
}) {
  const map = useMap();

  return (
    <button
      onClick={async () => {
        await refreshLocation();

        if (map) {
          map.panTo(position);
          map.setZoom(16);
        }
      }}
      style={{
        position: "absolute",
        top: 15,
        right: 15,
        zIndex: 1000,
        padding: "10px 14px",
        borderRadius: 10,
        border: "none",
        background: "#1976d2",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      📍 My Location
    </button>
  );
}

export default function FishingMap() {
  const [position, setPosition] = useState<LatLng>({
    lat: 45.5019,
    lng: -73.5674,
  });

  const [pins, setPins] = useState<LatLng[]>([]);

  const getLocation = async () => {
    try {
      await Geolocation.requestPermissions();

      const loc = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
      });

      setPosition({
        lat: loc.coords.latitude,
        lng: loc.coords.longitude,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "450px",
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <Map
        center={position}
        zoom={15}
        mapId="DEMO_MAP_ID"
        gestureHandling="greedy"
        onClick={(e) => {
          if (!e.detail.latLng) return;

          setPins((current) => [
            ...current,
            {
              lat: e.detail.latLng.lat,
              lng: e.detail.latLng.lng,
            },
          ]);
        }}
      >
        <AdvancedMarker position={position} />

        {pins.map((pin, index) => (
          <AdvancedMarker
            key={index}
            position={pin}
          />
        ))}

        <RecenterButton
          position={position}
          refreshLocation={getLocation}
        />
      </Map>
    </div>
  );
}