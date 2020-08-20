// GET uv index
import { SPFvalue } from "./SPFvalue.js";
import { bodyPart } from "./bodyPart.js";
import { skinTexture } from "./skinTexture.js";
import { productResult } from "./productResult.js";
import { showSPFValue } from "./showSPFValue.js";

export const getApi = () => {
  let lat = "47.16";
  let lng = "27.59";
  let alt = "85m";
  let ozone = "220du";
  let dt = document.querySelector("#day").value;

  const url =
    "https://api.openuv.io/api/v1/forecast?lat=" +
    lat +
    "&lng=" +
    lng +
    "&alt=" +
    alt +
    "&ozone=" +
    ozone +
    "&dt=" +
    dt +
    "T07:31:29.613Z";
  fetch(url, {
    method: "GET",
    headers: {
      "x-access-token": "28302cca3f60bb740a233dca99565cff",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.result);
      SPFvalue(data.result);
      showSPFValue(data.result);
      console.log(bodyPart());
      console.log(skinTexture());
      console.log(productResult(data.result));
    })
    .catch((error) => console.log(error));
};
