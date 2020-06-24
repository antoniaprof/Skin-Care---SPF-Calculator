export const showSection = section => {
    if (section === '.products') {
        document.querySelector(section).style.display = 'flex';
    } else {
        document.querySelector(section).style.display = 'block';
    };
}