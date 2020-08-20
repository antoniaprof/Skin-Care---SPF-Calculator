import { hideSection } from "./hideSection.js";
import { showSection } from "./showSection.js";

export const nextPage = (classValue, prevSection, nextSection) => {
  const changePage = () => {
    hideSection(prevSection);
    showSection(nextSection);
  };

  document.querySelector(classValue).addEventListener("click", changePage);
};
