export interface WeatherData {
  temperature: number;
  airTemperature: number;
  waterTemperature: number;

  windDirection: string;
  windSpeed: number;

  pressure: number;
  cloudCover: number;

  sunrise: string;
  sunset: string;

  moonPhase: string;

  precipitation: number;

  humidity: number;
  visibility: number;

  isDay: boolean;
}

function estimateWaterTemperature(
  airTemperature: number,
  month: number
): number {
  const seasonalBase = (() => {
    switch (month) {
      case 1: return 1;
      case 2: return 1;
      case 3: return 3;
      case 4: return 7;
      case 5: return 12;
      case 6: return 18;
      case 7: return 22;
      case 8: return 23;
      case 9: return 20;
      case 10: return 15;
      case 11: return 9;
      default: return 3;
    }
  })();

  const adjustment = (airTemperature - 20) * 0.15;

  return Math.round((seasonalBase + adjustment) * 10) / 10;
}

export function getWeather(
  _latitude?: number,
  _longitude?: number
): WeatherData {
  const now = new Date();

  const hour = now.getHours();
  const month = now.getMonth() + 1;

  const airTemperature = 22;

  return {
    temperature: airTemperature,

    airTemperature,

    waterTemperature: estimateWaterTemperature(
      airTemperature,
      month
    ),

    windDirection: "W",

    windSpeed: 14,

    pressure: 1017,

    cloudCover: 35,

    sunrise: "05:28",

    sunset: "20:41",

    moonPhase: "Waxing Crescent",

    precipitation: 5,

    humidity: 63,

    visibility: 10,

    isDay: hour >= 6 && hour < 21,
  };
}