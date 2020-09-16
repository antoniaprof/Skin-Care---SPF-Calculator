// calculate uv index based on the selected hours
import { calculateMaximum } from "./calculateMaximum.js";

export const uvIndex = (value) => {
  const hours = (first, last) => {
    value
      .filter(
        (obj) =>
          first <= new Date(obj.uv_time).getHours - 3 &&
          new Date(obj.uv_time).getHours - 3 <= last
      )
      .map((obj) => obj.uv);
  };

  const earlyMorning = hours(6, 8);
  const morning = hours(8, 10);
  const lateMorning = hours(10, 12);
  const lunch = hours(12, 14);
  const afternoon = hours(14, 16);
  const evening = hours(16, 18);

  const chosedHours = document.querySelector("#hours");
  const chosedOption = chosedHours.selectedIndex;

  let option = "";
  switch (chosedOption) {
    case 0:
      option = earlyMorning;
      break;
    case 1:
      option = morning;
      break;
    case 2:
      option = lateMorning;
      break;
    case 3:
      option = lunch;
      break;
    case 4:
      option = afternoon;
      break;
    case 5:
      option = evening;
  }

  let uvIndexValue = 0;
  if (option !== undefined) {
    uvIndexValue = calculateMaximum(option);
  }

  return uvIndexValue;
};
