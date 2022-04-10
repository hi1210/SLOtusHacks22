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
            url: chrome.runtime.getURL("popup.html"),
            type: 'popup',
        });
        console.log("update compilation");
    });
}
chrome.runtime.onMessage.addListener(function () {
    openPopup();
});
// chrome.tabs.onUpdated.addListener(function(){
// })
//openPopup()
// const tab = chrome.tabs.query({ active: true, currentWindow: true });
// chrome.windows.create({
//   url: `popup.html?${new URLSearchParams({
//     tabId: tab.id,
//   })}` ,
//   type: "popup",
// });