const string = location.search
const params = new URLSearchParams(string)
const money = params.get('data')!

console.log(money)

const checkoutPrice = parseFloat(JSON.parse(money).total.substring(1))
let roundupPrice1 = 0.0
let roundupPrice5 = 0.0

// console.log(checkoutPrice)

if ((checkoutPrice * 100) % 100 === 0) {
  // Case where price is a whole number
  roundupPrice1 = checkoutPrice + 1
} else {
  // Case where price has decimals
  const remainder = 1 - (checkoutPrice - Math.floor(checkoutPrice))
  roundupPrice1 = checkoutPrice + 1 + remainder
}

if (checkoutPrice < Math.floor(checkoutPrice / 10) * 10 + 5) {
  roundupPrice5 = Math.ceil(checkoutPrice / 5) * 5
} else {
  roundupPrice5 = Math.ceil(checkoutPrice / 10) * 10
}

console.log('Round up price to nearest 1 is: ', roundupPrice1.toFixed(2))
console.log('Round up price to nearest 5 is: ', roundupPrice5.toFixed(2))

const original = document.querySelector('.purchase')?.querySelector('p') as HTMLElement

console.log(original)
original.innerText = `$${checkoutPrice.toFixed(2)}`
