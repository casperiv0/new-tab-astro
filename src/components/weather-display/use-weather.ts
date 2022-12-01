import { useState, useEffect } from "preact/hooks";
import type { SettingsWeather } from "../../types/settings";
import type { Weather } from "../../types/weather";
import { getWeather } from "../../utils/get-weather";

export function useWeather(weatherSettings: SettingsWeather) {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    let interval: number;

    if (weatherSettings.show && weatherSettings.location) {
      // get the weatherSettings when weatherSettings changes
      getWeather(weatherSettings.location, weatherSettings.unit)
        .then(setWeather)
        .catch(() => setWeather(null));

      // set a new interval when weatherSettings changes
      interval = setInterval(() => {
        getWeather(weatherSettings.location!, weatherSettings.unit)
          .then(setWeather)
          .catch(() => setWeather(null));

        // refresh weatherSettings every 30 minutes
      }, 60 * 30 * 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return weather;
}
