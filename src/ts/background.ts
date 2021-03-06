async function openPopup(object: JSON) {
    // const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    await chrome.windows.create({
        url:
            chrome.runtime.getURL('popup.html') +
            '?data=' +
            encodeURIComponent(JSON.stringify(object)),
        type: 'popup',
        height: 600,
        width: 800,
    });
    // console.log("update compilation");
}

chrome.runtime.onMessage.addListener(function (object) {
    openPopup(object);
});
