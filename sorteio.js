
const sortBtn = document.querySelector(".button")

function chooseValues() {

    const min = Math.ceil(document.querySelector(".input1").value)

    const max = Math.floor(document.querySelector(".input2").value)

    const sort = Math.floor(Math.random() * (max - min) + min);

    if (min > max) {
        alert("ERROR! O Numero do primeiro espaço deve ser maior que o do Segundo")
    }
    else {
        alert(sort)
    }
    


}

sortBtn.addEventListener("click", chooseValues)
