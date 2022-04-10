const hello = 'Hello SLOtus Hacks!';
console.log(hello);

const total = document
    .querySelector('[data-test-id=TOTAL]')
    ?.querySelector('.text-display') as HTMLElement;
console.log(total.innerText);
console.log('live change to ts');

chrome.runtime.sendMessage({ total: total.innerText });
