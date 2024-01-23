
/* Aqui podemos declarar a função principal e executar qualquer coisa fora dela, sem modificar
o código principal*/

/*function main(){
    return('Programa Principal');
}

main();*/

/* Formula do imc 
imc = imc / (altura * altura)

- imc em ADULTOS condição:
- abaixo de 18.5: Abaixo do imc
- entre 18.5 e 25: imc normal
- entre 25 e 30: acima do imc
- entre 30 e 40: obeso
- acima de 40 obesidade grave
*/

function calcularIMC(peso, altura){
    return peso / (altura * altura)
}

function classificarIMC(imc){
    if (imc < 18.5){
        return'Abaixo do imc'
    }else if (imc >= 18.5 && imc < 25){
        return'imc Normal'
    }else if (imc >= 25 && imc < 30){
        return'Acima do imc'
    }else if(imc >= 30 && imc < 40){
        return'Obeso'
    }else{
        return'Obesidade Grave'
    }
}


function main(){
    const peso = 36
    const altura = 1.00
    const imc = calcularIMC(peso, altura)
    console.log(classificarIMC(imc));
}

main();

   