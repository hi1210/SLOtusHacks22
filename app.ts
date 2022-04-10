const hello = 'Hello SLOtus Hacks!'
console.log(hello)

const total = document.querySelector('[data-test-id=TOTAL]')?.querySelector('.text-display') as HTMLElement
console.log(total.innerText)

chrome.runtime.sendMessage({total: total.innerText});
