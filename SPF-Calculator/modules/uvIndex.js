// calculate uv index based on the selected hours
import { calculateMaximum } from "./calculateMaximum.js";

export const uvIndex = (value) => {
  let earlyMorning = [value[4], value[5]].map((obj) => obj.uv);
  let morning = [value[6], value[7]].map((obj) => obj.uv);
  let lateMorning = [value[8], value[9]].map((obj) => obj.uv);
  let lunch = [value[10], value[11]].map((obj) => obj.uv);
  let afternoon = [value[11], value[12]].map((obj) => obj.uv);
  let evening = [value[12], value[13]].map((obj) => obj.uv);

  let hours = document.querySelector("#hours");
  let uvIndexValue = 0;
  let option = hours.selectedIndex;
  switch (option) {
    case 0:
      uvIndexValue = calculateMaximum(earlyMorning);
      break;
    case 1:
      uvIndexValue = calculateMaximum(morning);
      break;
    case 2:
      uvIndexValue = calculateMaximum(lateMorning);
      break;
    case 3:
      uvIndexValue = calculateMaximum(lunch);
      break;
    case 4:
      uvIndexValue = calculateMaximum(afternoon);
      break;
    case 5:
      uvIndexValue = calculateMaximum(evening);
  }
  return uvIndexValue;
};
