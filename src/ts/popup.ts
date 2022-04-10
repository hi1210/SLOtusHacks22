const string = location.search;
const params = new URLSearchParams(string);
const money = params.get('data')!;

console.log(money);

const checkoutPrice = parseFloat(JSON.parse(money).total.substring(1));
let roundupPrice1 = 0.0;
let roundupPrice5 = 0.0;

// console.log(checkoutPrice)

if ((checkoutPrice * 100) % 100 === 0) {
    // Case where price is a whole number
    roundupPrice1 = checkoutPrice + 1;
} else {
    // Case where price has decimals
    const remainder = 1 - (checkoutPrice - Math.floor(checkoutPrice));
    roundupPrice1 = checkoutPrice + 1 + remainder;
}

roundupPrice5 = Math.ceil(checkoutPrice / 10) * 10;

console.log('Round up price to nearest 1 is: ', roundupPrice1.toFixed(2));
console.log('Round up price to nearest 5 is: ', roundupPrice5.toFixed(2));

const original = document
    .querySelector('.purchase')
    ?.querySelector('p') as HTMLElement;

const round1 = document
    .querySelector('.donation')
    ?.querySelector('#round-one-button') as HTMLElement;

const round10 = document
    .querySelector('.donation')
    ?.querySelector('#round-ten-button') as HTMLElement;

const round1text = document.querySelector('#round-dollar') as HTMLElement;
const round10text = document.querySelector('#round-ten') as HTMLElement;

const totalamt = document
    .querySelector('.total')
    ?.querySelector('p') as HTMLElement;

console.log(original);
original.innerText = `$${checkoutPrice.toFixed(2)}`;
round1text.innerText = `$${roundupPrice1.toFixed(2)} (${(
    roundupPrice1 - checkoutPrice
).toFixed(2)})`;

round10text.innerText = `$${roundupPrice5.toFixed(2)} (${(
    roundupPrice5 - checkoutPrice
).toFixed(2)})`;

console.log(round10);
console.log(totalamt);

totalamt.innerText = `$${roundupPrice1.toFixed(2)} (${(
    roundupPrice1 - checkoutPrice
).toFixed(2)})`;

round1.addEventListener('click', function () {
    totalamt.innerText = `$${roundupPrice1.toFixed(2)} (${(
        roundupPrice1 - checkoutPrice
    ).toFixed(2)})`;
});

round10.addEventListener('click', function () {
    totalamt.innerText = `$${roundupPrice5.toFixed(2)} (${(
        roundupPrice5 - checkoutPrice
    ).toFixed(2)})`;
});
