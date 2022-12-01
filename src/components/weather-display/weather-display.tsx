import { Unit } from "../../types/settings";
import { classnames } from "../../utils/classnames";
import { useWeather } from "./use-weather";

export function WeatherDisplay() {
  const weather = useWeather({ unit: Unit.METRIC, location: "London", show: true });
  const description = weather?.weather[0]?.description;

  return (
    <div
      title={description}
      class={classnames(
        "fixed bottom-12 left-12 transition-opacity duration-200",
        weather ? "opacity-1" : "opacity-0",
      )}
    >
      <h1 className="text-2xl text-end select-none font-semibold">
        {" "}
        {weather?.main.temp.toFixed(0)}°{"C"}
      </h1>
    </div>
  );
}
