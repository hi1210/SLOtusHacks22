"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function openPopup() {
    return __awaiter(this, void 0, void 0, function* () {
        const [tab] = yield chrome.tabs.query({ active: true, currentWindow: true });
        yield chrome.windows.create({
            url: chrome.runtime.getURL('popup.html'),
            type: 'popup'
        });
        // console.log("update compilation");
    });
}
chrome.runtime.onMessage.addListener(function (object) {
    openPopup();
    const checkoutPrice = parseFloat(object.total.substring(1));
    let roundupPrice1 = 0.00;
    let roundupPrice5 = 0.00;
    // console.log(checkoutPrice)
    if (checkoutPrice == 0) {
        return;
    }
    if ((checkoutPrice * 100) % 100 == 0) {
        // Case where price is a whole number
        roundupPrice1 = checkoutPrice + 1;
    }
    else {
        // Case where price has decimals
        const remainder = 1 - (checkoutPrice - Math.floor(checkoutPrice));
        roundupPrice1 = checkoutPrice + remainder;
    }
    if (checkoutPrice < (Math.floor(checkoutPrice / 10) * 10) + 5) {
        roundupPrice5 = Math.ceil(checkoutPrice / 5) * 5;
    }
    else {
        roundupPrice5 = Math.ceil(checkoutPrice / 10) * 10;
    }
    // console.log("Round up price to nearest 1 is: ", roundupPrice1.toFixed(2))
    // console.log("Round up price to nearest 5 is: ", roundupPrice5.toFixed(2))
});
