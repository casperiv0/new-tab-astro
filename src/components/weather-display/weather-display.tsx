import { Unit } from "../../types/settings";
import { useWeather } from "./use-weather";

export function WeatherDisplay() {
  const weather = useWeather({ unit: Unit.METRIC, location: "London", show: true });
  const description = weather?.weather[0]?.description;

  return (
    <div
      title={description}
      style={{ opacity: weather ? 1 : 0, transition: "200ms" }}
      class={"fixed bottom-12 left-12"}
    >
      <h1 className="text-2xl text-end select-none font-semibold">
        {" "}
        {weather?.main.temp.toFixed(0)}°{"C"}
      </h1>
    </div>
  );
}
