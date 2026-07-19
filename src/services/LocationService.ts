import { Geolocation } from "@capacitor/geolocation";

export interface UserLocation {
  latitude: number;
  longitude: number;
  city: string;
  province: string;
}

export async function getCurrentLocation(): Promise<UserLocation> {
  await Geolocation.requestPermissions();

  const position = await Geolocation.getCurrentPosition({
    enableHighAccuracy: true,
  });

  let city = "Unknown";
  let province = "";

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
    );

    const data = await response.json();

    city =
      data.address.city ||
      data.address.town ||
      data.address.village ||
      data.address.municipality ||
      "Unknown";

    province =
      data.address.state ||
      data.address.province ||
      "";
  } catch (error) {
    console.error("Reverse geocoding failed.", error);
  }

  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
    city,
    province,
  };
}