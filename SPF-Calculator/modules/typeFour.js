// type 4 -> SPF 0–10+ (UV 0–6), SPF 0–15+ (UV 6–8), SPF 30+ (UV 8–10), SPF 50+ (UV >10)
import { uvIndex } from "./uvIndex.js";

export const typeFour = (value) => {
  let result = "";
  if (uvIndex(value) < 6) {
    result = "SPF0";
  } else if (uvIndex(value) > 6 && uvIndex(value) < 8) {
    result = "SPF15";
  } else if (uvIndex(value) > 8 && uvIndex(value) < 10) {
    result = "SPF30";
  } else {
    result = "SPF50+";
  }
  return result;
};
