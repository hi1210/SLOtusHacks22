const donate = new URLSearchParams(location.search).get('donation')!;

const donationInput = document.querySelector(
    '[aria-label="Enter an other amount to donate"]'
) as HTMLInputElement;
donationInput.innerText = donate;
