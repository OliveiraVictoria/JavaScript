/* Formula do imc 
imc = imc / (altura * altura)

- imc em ADULTOS condição:
- abaixo de 18.5: Abaixo do imc
- entre 18.5 e 25: imc normal
- entre 25 e 30: acima do imc
- entre 30 e 40: obeso
- acima de 40 obesidade grave
*/

const peso = 18.5
const altura = 1.00

let imc = peso / (altura * altura)

if (imc < 18.5){
    console.log('Abaixo do imc')
}else if (imc >= 18.5 && imc < 25){
    console.log('imc Normal')
}else if (imc >= 25 && imc < 30){
    console.log('Acima do imc')
}else if(imc >= 30 && imc < 40){
    console.log('Obeso')
}else{
    console.log('Obesidade Grave')
}
    

