/* controlador de fluxo
    -IF(se)
    -Else(se não)

    Operadores de comparação
    > maior que
    < menor que
    == igual que
    */
   const notaDoaluno = 7
   const notaDecorte = 5

   if( notaDoaluno >= notaDecorte ){
    //Oque será executado, se o if for verdadeiro
    
    console.log("Aprovado")
   }
   else {
    // Se o IF for falso ele entra aqui
    
    /* uso do ==*/ 
    console.log("Reprovado")

    const senhaDousuario = 123456
    const senhaDigitada = 123457

    if(senhaDousuario==senhaDigitada){
        console.log("suceffull")
    }
    else {
        console.log("error")
    }
   }
