// type 2 || 3 -> SPF 0–10+ (UV 0–3), SPF 15+ (UV 3–6), SPF 30+ (UV 6–8), SPF 50+ (UV >8)
import { uvIndex } from "./uvIndex.js";

export const typeTwo = (value) => {
  let result = "";
  if (uvIndex(value) < 3) {
    result = "SPF0";
  } else if (uvIndex(value) > 3 && uvIndex(value) < 6) {
    result = "SPF15";
  } else if (uvIndex(value) > 6 && uvIndex(value) < 8) {
    result = "SPF30";
  } else {
    result = "SPF50+";
  }
  return result;
};
