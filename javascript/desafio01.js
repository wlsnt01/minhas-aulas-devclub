


const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")



function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valordo real a ser convertido

    const currencyValueConverted = document.querySelector(".currency-value")//valor de outras moedas ja convertidas

    const dolarToday = 6.06

    const euroToday = 6.37

    const libraToday = 7.59

    const ieneToday = 0.039

    const bitcoinToday = 603847.74

    const rubiaIndianaToday = 0.070
    


    const convertedValue = inputCurrencyValue / dolarToday

    const convertValueEuro = inputCurrencyValue / euroToday

    const convertValueLibra = inputCurrencyValue / libraToday

    const convertValueIene = inputCurrencyValue / ieneToday

    const convertValueBitcoin = inputCurrencyValue / bitcoinToday

    const convertValueRubiaIndiana = inputCurrencyValue / rubiaIndianaToday
    
   


    if (currencySelect.value == "Dolar")
        currencyValueConverted.innerHTML = (new Intl.NumberFormat("en-Us", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)
        )



    if (currencySelect.value == "Euro")
        currencyValueConverted.innerHTML = (new Intl.NumberFormat("fr", {
            style: "currency",
            currency: "EUR"
        }).format(convertValueEuro)
        )

    if (currencySelect.value == "Libra")
        currencyValueConverted.innerHTML = (new Intl.NumberFormat("UK", {
            style: "currency",
            currency: "GBP"

        }).format(convertValueLibra)
        )
    if (currencySelect.value == "Iene")
        currencyValueConverted.innerHTML = (new Intl.NumberFormat("jp", {
            style: "currency",
            currency: "JPY"

        }).format(convertValueIene)
        )
    if (currencySelect.value == "Bitcoin")
        currencyValueConverted.innerHTML = (new Intl.NumberFormat("el-sv", {
            style: "currency",
            currency: "BTC"

        }).format(convertValueBitcoin)

        )
    currencyValueToConvert.innerHTML = (new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    )
  
}


function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = "Dolar"
        currencyImage.src = "../img/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "../img/Design sem nome 3.png"

    }
    if (currencySelect.value == "Libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "../img/libra 1.png"
    }
    if (currencySelect.value == "Iene") {
        currencyName.innerHTML = "Iene"
        currencyImage.src = "../img/iene3.png"
    }
    if (currencySelect.value == "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "../img/bitcoin 1.png"
    }

convertValues()
}







currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

