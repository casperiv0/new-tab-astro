import format from "date-fns/format/index.js";
import { DEFAULT_DATE_FORMAT } from "../types/settings";
import { getGreeting, Greeting } from "./get-greeting";

interface Time {
  formattedTime: string;
  greeting: Greeting;
}

export function getTime(formatStr?: string | null): Time {
  const _formatStr = formatStr ?? DEFAULT_DATE_FORMAT;
  let formattedTime = "";

  try {
    formattedTime = format(Date.now(), _formatStr);
  } catch (e) {
    console.log(e);

    formattedTime = format(Date.now(), "EEEE • HH:mm");
  }

  const greeting = getGreeting();

  return {
    formattedTime,
    greeting,
  };
}
