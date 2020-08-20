// check if face or body was selected
// - using Array.from() because the result is a NodeList, not an array

export const bodyPart = () => {
  let result = [];
  if (document.querySelector("#body").checked) {
    result = Array.from(document.querySelectorAll(".body"));
  } else if (document.querySelector("#face").checked) {
    result = Array.from(document.querySelectorAll(".face"));
  }
  return result;
};
