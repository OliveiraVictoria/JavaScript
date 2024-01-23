/*Boolean é uma variavel que representa o verdadeiro ou falso*/
/* = é para atribuuição,  == igualdade com conversão implicita  e === é para igualdade */
/* a ! seria o não da condição, ou seja na expressão if (!numeroPar) estou dizendo que SE Não for numeroPar...*/
/* to.fixed serve para dizer que só quer duas casas demais depois do numero*/

const numero = 23;
const numeroDvisivelPor5 = numero % 5 === 0;



if (numero  === 0 ) {
    console.log('Numero não é válido');
}
else if ("numeroDvisivelPor5"){
    console.log("Sim")
}
else if(!numeroDvisivelPor5){
    console.log('Não')
}