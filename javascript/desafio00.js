const CurrencySelect0 = document.querySelector(".currency-select0"); // Moeda de origem
const CurrencySelect = document.querySelector(".currency-select"); // Moeda de destino
const convertButton = document.querySelector(".convert-button");


async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueConverted = document.querySelector(".currency-value"); // Resultado da conversão
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor a ser convertido

    //async await
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(Response => Response.json())

    // Valores das moedas em relação ao Real
    const rates = {
        BRL: 1,
        USD: data.USDBRL.high,
        EUR: data.EURBRL.high,
        GBP: 7.70, // Atualize com valores válidos
        BTC: data.BTCBRL.high,
        JPY: 0.039,
        INR: 0.0741,
    };

    const fromRate = rates[CurrencySelect0.value]; // Valor da moeda de origem
    const toRate = rates[CurrencySelect.value]; // Valor da moeda de destino

    if (!inputCurrencyValue || isNaN(inputCurrencyValue)) {
        alert("Por favor, insira um valor válido.");
        return;
    }


    // Calcula a taxa de conversão
    const conversionRate = fromRate / toRate;

    // Converte o valor
    const convertedValue = inputCurrencyValue * conversionRate;
    // Formata e exibe o valor a ser convertido
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: CurrencySelect0.value,
    }).format(inputCurrencyValue);
    // Formata e exibe o valor convertido
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: CurrencySelect.value,
    }).format(convertedValue);
}
function changeCurrency() {
    const CurrencyName0 = document.getElementById("currency-name0");
    const CurrencyName = document.getElementById("currency-name");
    const CurrencyImage0 = document.querySelector(".currency-image0");
    const CurrencyImage = document.querySelector(".currency-image");
    const currencyNames = {
        BRL: "Real",
        USD: "Dolar",
        EUR: "Euro",
        GBP: "Libra",
        BTC: "Bitcoin",
        JPY: "Iene",
        INR: "Rubia-indiana"

    };
    const currencyImages = {
        BRL: "../img/brasil 2.png",
        USD: "../img/estados-unidos (1) 1.png",
        EUR: "../img/Design sem nome 3.png",
        GBP: "../img/libra 1.png",
        BTC: "../img/bitcoin 1.png",
        JPY: "../img/iene3.png",
        INR: "../img/rubia indiana.png"
    };
    CurrencyName0.innerHTML = currencyNames[CurrencySelect0.value];
    CurrencyImage0.src = currencyImages[CurrencySelect0.value];

    CurrencyName.innerHTML = currencyNames[CurrencySelect.value];
    CurrencyImage.src = currencyImages[CurrencySelect.value];
    convertValues();
}
CurrencySelect0.addEventListener("change", changeCurrency);
CurrencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
