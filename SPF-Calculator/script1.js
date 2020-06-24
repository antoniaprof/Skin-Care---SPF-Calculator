// CHANGING THE PAGE
const hideSection = section => {
    document.querySelector(section).style.display = 'none';
};

const showSection = section => {
    if (section === '.products') {
        document.querySelector(section).style.display = 'flex';
    } else {
        document.querySelector(section).style.display = 'block';
    };
};

const nextPage = (classValue, prevSection, nextSection) => {
    const changePage = () => {
        hideSection(prevSection);
        showSection(nextSection);
    };

    document.querySelector(classValue)
        .addEventListener('click', changePage);
};

if (document.documentElement.clientWidth < 750) {
    nextPage('.hideSection1', 'header', '.choice');
}
nextPage('.hideSection1', '.intro', '.choice');
nextPage('.hideSection2', '.choice', '.location');
nextPage('.hideSection3', '.location', '.result');
nextPage('.hideSection4', '.result', '.products');


// GET uv index

const getApi = () => {
    let lat = '47.16';
    let lng = '27.59';
    let alt = '85m';
    let ozone = '220du';
    let dt = document.querySelector('#day').value;

    const url = 'https://api.openuv.io/api/v1/forecast?lat=' + lat + '&lng=' + lng + '&alt=' + alt + '&ozone=' + ozone + '&dt=' + dt + 'T07:31:29.613Z';
    fetch(url, {
        method: "GET",
        headers: {
            'x-access-token': '28302cca3f60bb740a233dca99565cff'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.result)
        })
        .catch(error => console.log(error));

}


let calculateMaximum = array => {
    let maxim = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxim) {
            maxim = array[i];
        };
    };
    return maxim;
};

// calculate uv index based on the selected hours
const uvIndex = () => {
    let earlyMorning = [data.result[4], data.result[5]].map(obj => obj.uv);
    let morning = [data.result[6], data.result[7]].map(obj => obj.uv);
    let lateMorning = [data.result[8], data.result[9]].map(obj => obj.uv);
    let lunch = [data.result[10], data.result[11]].map(obj => obj.uv);
    let afternoon = [data.result[12], data.result[13]].map(obj => obj.uv);
    let evening = [data.result[14], data.result[15]].map(obj => obj.uv);

    let hours = document.querySelector('#hours')
    let option = hours.selectedIndex;
    switch (option) {
        case 0:
            uvIndexValue = calculateMaximum(earlyMorning);
            break;
        case 1:
            uvIndexValue = calculateMaximum(morning);
            break;
        case 2:
            uvIndexValue = calculateMaximum(lateMorning);
            break;
        case 3:
            uvIndexValue = calculateMaximum(lunch);
            break;
        case 4:
            uvIndexValue = calculateMaximum(afternoon);
            break;
        case 5:
            uvIndexValue = calculateMaximum(evening);
    }
    return uvIndexValue;
}
// uvIndex -> skin type => spf -> body => body + spf class product
// uvIndex -> skin type => spf -> face -> oily => face + oily + spf class product
// uvIndex -> skin type => spf -> face -> sensitive => face + sensitive + spf class product

// SPF based on skin type
//  type 1 -> SPF 15+ (UV 0–6), SPF 30+ (UV 6–8), SPF 50+ (UV >8) 

const typeOne = () => {
    let result = '';
    if (uvIndex() < 6) {
        result = 'SPF15';
    } else if (uvIndex() > 6 && uvIndex() < 8) {
        result = 'SPF30';
    } else {
        result = 'SPF50+';
    };
    return result;
};


// type 2 || 3 -> SPF 0–10+ (UV 0–3), SPF 15+ (UV 3–6), SPF 30+ (UV 6–8), SPF 50+ (UV >8)

const typeTwo = () => {
    let result = '';
    if (uvIndex() < 3) {
        result = 'SPF0';
    } else if (uvIndex() > 3 && uvIndex() < 6) {
        result = 'SPF15';
    } else if (uvIndex() > 6 && uvIndex() < 8) {
        result = 'SPF30';
    } else {
        result = 'SPF50+';
    };
    return result;
};

// type 4 -> SPF 0–10+ (UV 0–6), SPF 0–15+ (UV 6–8), SPF 30+ (UV 8–10), SPF 50+ (UV >10)

const typeFour = () => {
    let result = '';
    if (uvIndex() < 6) {
        result = 'SPF0';
    } else if (uvIndex() > 6 && uvIndex() < 8) {
        result = 'SPF15';
    } else if (uvIndex() > 8 && uvIndex() < 10) {
        result = 'SPF30';
    } else {
        result = 'SPF50+';
    };
    return result;
};

// type 5 -> SPF 0–10+ (UV 3–6), SPF 15+ (UV 6–10), SPF 30+ (UV >10)

const typeFive = () => {
    let result = '';
    if (uvIndex() < 6) {
        result = 'SPF0';
    } else if (uvIndex() > 6 && uvIndex() < 10) {
        result = 'SPF15';
    } else {
        result = 'SPF30';
    };
    return result;
};

// type 6 -> SPF 0–10+ (UV 3–6), SPF 15+ (UV > 6)

const typeSix = () => {
    let result = '';
    if (uvIndex() < 6) {
        result = 'SPF0';
    } else {
        result = 'SPF15';
    };
    return result;
};

// SPF result
function SPFvalue() {
    let result = '';
    if (document.querySelector('#typeOne').checked) {
        result = typeOne();
    } else if (document.querySelector('#typeTwo').checked ||
        document.querySelector('#typeThree').checked) {
        result = typeTwo();
    } else if (document.querySelector('#typeFour').checked) {
        result = typeFour();
    } else if (document.querySelector('#typeFive').checked) {
        result = typeFive();
    } else if (document.querySelector('#typeSix').checked) {
        result = typeSix();
    };
    return result;
};

// show the SPF value to the user
const showSPFValue = () => {
    let displayResult = document.querySelector('.displayResult')
    if (SPFvalue() === 'SPF0') {
        displayResult.textContent = 'NO SPF NEDEED! CONSIDER WEARING A HYDRATING CREAM';
    } else {
        displayResult.textContent = 'RECOMMENDED SPF: ' + SPFvalue();
    }
}

// check if face or body was selected
// - using Array.from() because the result is a NodeList, not an array

let bodyPart = () => {
    let result = [];
    if (document.querySelector('#body').checked) {
        result = Array.from(document.querySelectorAll('.body'))
    } else if (document.querySelector('#face').checked) {
        result = Array.from(document.querySelectorAll('.face'))
    }
    return result;
}

// check if sensitive or oily was selected
let skinTexture = () => {
    let result = [];
    if (document.querySelector('#drySkin').checked) {
        result = Array.from(document.querySelectorAll('.sensitive'));
    } else if (document.querySelector('#oilySkin').checked) {
        result = Array.from(document.querySelectorAll('.oily'));
    };
    return result;
};

let skinTextureValue = () => {
    let result = '';
    if (document.querySelector('#drySkin').checked) {
        result = 'sensitive';
    } else if (document.querySelector('#oilySkin').checked) {
        result = 'oily';
    };
    return result;
}

// filter products based on selected options
const product = () => {
    let productDiv = bodyPart().filter(item => item.classList.contains(SPFvalue()) &&
        item.classList.contains(skinTextureValue()))
    let bestMatchDiv = document.querySelector('.recommendedProducts');
    productDiv.map(item => bestMatchDiv.appendChild(item))
    return productDiv;
}


// display result 
const calcSPF = () => {
    getApi();
    showSPFValue();
    console.log(bodyPart())
    console.log(skinTexture())
    console.log(product());
}

let SPFBtn = document.querySelector('.calculateSPFBtn')
SPFBtn.addEventListener('click', calcSPF)