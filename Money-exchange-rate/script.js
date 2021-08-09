// https://v6.exchangerate-api.com/v6/a27a0e60260380b0e747ec42/latest/USD

const currency_One = document.getElementById('currency-one');
const currency_Two = document.getElementById('currency-two');
const amount_One = document.getElementById('amount-one');
const amount_Two = document.getElementById('amount-two');
const rate = document.getElementById('rate');
let swap = document.getElementById('swap');

function exchange() {
    const mainCurrency = currency_One.value;
    const convertedCurrency = currency_Two.value;
    
    const url = 'https://v6.exchangerate-api.com/v6/a27a0e60260380b0e747ec42/latest/' + mainCurrency;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const  convertedRate = data.conversion_rates[convertedCurrency];

            rate.innerHTML = `<h4>1 ${mainCurrency} = ${convertedRate} ${convertedCurrency}</h4>`;
            amount_Two.value = amount_One.value * convertedRate;
        })
}

function swapButton() {
    const temp = currency_One.value;
    currency_One.value = currency_Two.value;
    currency_Two.value = temp;

    exchange();
}

swap.addEventListener('click', swapButton);
currency_One.addEventListener('change', exchange);
currency_Two.addEventListener('change', exchange);
amount_One.addEventListener('input', exchange);
amount_Two.addEventListener('input', exchange);


exchange();