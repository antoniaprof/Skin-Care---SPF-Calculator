// SPF result
import { typeOne } from './typeOne.js'
import { typeTwo } from './typeTwo.js'
import { typeFour } from './typeFour.js'
import { typeFive } from './typeFive.js'
import { typeSix } from './typeSix.js'

export const SPFvalue = value => {
    let result = '';
    if (document.querySelector('#typeOne').checked) {
        result = typeOne(value);
    } else if (document.querySelector('#typeTwo').checked ||
        document.querySelector('#typeThree').checked) {
        result = typeTwo(value);
    } else if (document.querySelector('#typeFour').checked) {
        result = typeFour(value);
    } else if (document.querySelector('#typeFive').checked) {
        result = typeFive(value);
    } else if (document.querySelector('#typeSix').checked) {
        result = typeSix(value);
    };
    return result;
}