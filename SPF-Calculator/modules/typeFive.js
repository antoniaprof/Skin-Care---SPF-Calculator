// type 5 -> SPF 0–10+ (UV 3–6), SPF 15+ (UV 6–10), SPF 30+ (UV >10)
import { uvIndex } from './uvIndex.js'

export const typeFive = value => {
    let result = '';
    if (uvIndex(value) < 6) {
        result = 'SPF0';
    } else if (uvIndex(value) > 6 && uvIndex(value) < 10) {
        result = 'SPF15';
    } else {
        result = 'SPF30';
    };
    return result;
}