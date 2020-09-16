import { nextPage } from "./changePage/nextPage.js";
import { calculateSPF } from "./calculateSPF.js";

// CHANGING THE PAGE
if (document.documentElement.clientWidth < 750) {
  nextPage(".hideSection1", "header", ".choice");
}
nextPage(".hideSection1", ".intro", ".choice");
nextPage(".hideSection2", ".choice", ".location");
nextPage(".hideSection3", ".location", ".result");
nextPage(".hideSection4", ".result", ".products");

// uvIndex -> skin type => spf -> body => body + spf class product
// uvIndex -> skin type => spf -> face -> oily => face + oily + spf class product
// uvIndex -> skin type => spf -> face -> sensitive => face + sensitive + spf class product

// display result
// getAPI -> uvIndex -> calculateMaximum -> typeOne/typeTwo... -> SPFvalue -> bodyPart -> skinTexture
// -> skinTextureValue -> productResult -> calculateSPF

const SPFBtn = document.querySelector(".calculateSPFBtn");
SPFBtn.addEventListener("click", calculateSPF);
