import { useState, useEffect } from "preact/hooks";
import type { SettingsDate } from "../../types/settings";
import { getTime } from "../../utils/get-time";

export function useTime(dateSettings: SettingsDate) {
  const [time, setTime] = useState(getTime(dateSettings.format));

  useEffect(() => {
    setTime(getTime(dateSettings.format));

    const interval = setInterval(() => {
      setTime(getTime(dateSettings.format));
    }, 1_000);

    return () => {
      clearInterval(interval);
    };
  }, [dateSettings.format]);

  return time;
}
