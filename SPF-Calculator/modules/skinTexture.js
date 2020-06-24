// check if sensitive or oily was selected
export const skinTexture = () => {
    let result = [];
    if (document.querySelector('#drySkin').checked) {
        result = Array.from(document.querySelectorAll('.sensitive'));
    } else if (document.querySelector('#oilySkin').checked) {
        result = Array.from(document.querySelectorAll('.oily'));
    };
    return result;
}