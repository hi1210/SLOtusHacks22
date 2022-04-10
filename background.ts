async function openPopup() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.windows.create({
      url: chrome.runtime.getURL("popup.html") ,
      type: 'popup',
    });
    console.log("update compilation");
  }


chrome.runtime.onMessage.addListener(function(){
  openPopup()
})

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