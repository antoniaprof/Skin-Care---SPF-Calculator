export const calculateMaximum = array => {
    let maxim = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxim) {
            maxim = array[i];
        };
    };
    return maxim;
};