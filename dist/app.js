"use strict";
var _a;
const hello = 'Hello SLOtus Hacks!';
console.log(hello);
const total = (_a = document
    .querySelector('[data-test-id=TOTAL]')) === null || _a === void 0 ? void 0 : _a.querySelector('.text-display');
console.log(total.innerText);
console.log('live change to ts');
chrome.runtime.sendMessage({ total: total.innerText });
