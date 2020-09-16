// show the SPF value to the user
import { SPFvalue } from "./SPFvalue.js";

export const showSPFValue = (value) => {
  const displayResult = document.querySelector(".displayResult");
  if (SPFvalue(value) === "SPF0") {
    displayResult.textContent =
      "NO SPF NEDEED! CONSIDER WEARING A HYDRATING CREAM";
  } else {
    displayResult.textContent = "RECOMMENDED SPF: " + SPFvalue(value);
  }
};
