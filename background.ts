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
