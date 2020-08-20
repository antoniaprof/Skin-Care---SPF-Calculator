export const skinTextureValue = () => {
  let result = "";
  if (document.querySelector("#drySkin").checked) {
    result = "sensitive";
  } else if (document.querySelector("#oilySkin").checked) {
    result = "oily";
  }
  return result;
};
