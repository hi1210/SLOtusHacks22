const donation = new URLSearchParams(location.search).get('donation')!;

const amount = document.querySelector('#donation') as HTMLElement;
amount.innerText = `$${donation}`;

setTimeout(
    () =>
        chrome.windows.create({
            url: `https://donate.wck.org/give/393234#!/donation/checkout?donate=${donation}`,
        }),
    1000
);
