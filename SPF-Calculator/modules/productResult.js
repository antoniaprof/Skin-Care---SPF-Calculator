// filter products based on selected options
import { bodyPart } from "./bodyPart.js";
import { SPFvalue } from "./SPFvalue.js";
import { skinTextureValue } from "./skinTextureValue.js";

export const productResult = (value) => {
  const productDiv = bodyPart().filter(
    (item) =>
      item.classList.contains(SPFvalue(value)) &&
      item.classList.contains(skinTextureValue())
  );
  const bestMatchDiv = document.querySelector(".recommendedProducts");
  productDiv.map((item) => bestMatchDiv.appendChild(item));
  return productDiv;
};
