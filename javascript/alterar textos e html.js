
/* alterar textos e html no java script*/ 
const element = document.querySelector(".paragraph.js")

element.innerHTML= "texto novo <b>ola</b>" // alteranto o texto

console.log(element.textcontent)// Só HTML
console.log(element.innerText)// LEVA EM CONTA O CSS
console.log(element.innerHTML)//TRAS TUDO ->permite adicionar HTML