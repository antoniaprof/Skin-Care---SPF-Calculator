// type 6 -> SPF 0–10+ (UV 3–6), SPF 15+ (UV > 6)
import { uvIndex } from "./uvIndex.js";

export const typeSix = (value) => {
  let result = "";
  if (uvIndex(value) < 6) {
    result = "SPF0";
  } else {
    result = "SPF15";
  }
  return result;
};
