"use strict";
var _a, _b, _c, _d;
const string = location.search;
const params = new URLSearchParams(string);
const money = params.get('data');
console.log(money);
const checkoutPrice = parseFloat(JSON.parse(money).total.substring(1));
let roundupPrice1 = 0.0;
let roundupPrice5 = 0.0;
// console.log(checkoutPrice)
if ((checkoutPrice * 100) % 100 === 0) {
    // Case where price is a whole number
    roundupPrice1 = checkoutPrice + 1;
}
else {
    // Case where price has decimals
    const remainder = 1 - (checkoutPrice - Math.floor(checkoutPrice));
    roundupPrice1 = checkoutPrice + 1 + remainder;
}
roundupPrice5 = Math.ceil(checkoutPrice / 10) * 10;
console.log('Round up price to nearest 1 is: ', roundupPrice1.toFixed(2));
console.log('Round up price to nearest 5 is: ', roundupPrice5.toFixed(2));
const original = (_a = document
    .querySelector('.purchase')) === null || _a === void 0 ? void 0 : _a.querySelector('p');
const round1 = (_b = document
    .querySelector('.donation')) === null || _b === void 0 ? void 0 : _b.querySelector('#round-one-button');
const round10 = (_c = document
    .querySelector('.donation')) === null || _c === void 0 ? void 0 : _c.querySelector('#round-ten-button');
const round1text = document.querySelector('#round-dollar');
const round10text = document.querySelector('#round-ten');
const totalamt = (_d = document
    .querySelector('.total')) === null || _d === void 0 ? void 0 : _d.querySelector('p');
console.log(original);
original.innerText = `$${checkoutPrice.toFixed(2)}`;
round1text.innerText = `$${roundupPrice1.toFixed(2)} (${(roundupPrice1 - checkoutPrice).toFixed(2)})`;
round10text.innerText = `$${roundupPrice5.toFixed(2)} (${(roundupPrice5 - checkoutPrice).toFixed(2)})`;
console.log(round10);
console.log(totalamt);
totalamt.innerText = `$${roundupPrice1.toFixed(2)} (${(roundupPrice1 - checkoutPrice).toFixed(2)})`;
round1.addEventListener('click', function () {
    totalamt.innerText = `$${roundupPrice1.toFixed(2)} (${(roundupPrice1 - checkoutPrice).toFixed(2)})`;
});
round10.addEventListener('click', function () {
    totalamt.innerText = `$${roundupPrice5.toFixed(2)} (${(roundupPrice5 - checkoutPrice).toFixed(2)})`;
});
