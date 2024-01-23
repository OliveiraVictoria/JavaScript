/*  
 DESAFIO!! 
    1 - Consumo
    2 - Distancia em km de Viagem   
    3 - tipo de combustivel do seu carro
    4 - Preço do etanol
    5 - Preço da gasolina
*/

/*  1 - consumo
    2 - Distancia = 100
    3 - combusCarro  
    4 - R$3 = precoEtanol
    5 - R$5 - precoGasolina
*/

const precoEtanol = 3
const precoGasolina = 5
const distancia = 100
const consumo = 20
const tipoCombustível = 'Etanol'

if( tipoCombustível === 'Etanol') {
    let gastoCombustivel = precoEtanol * (distancia / consumo);
    console.log(gastoCombustivel.toFixed(2));
} else if (tipoCombustível === 'Gasolina'){
    let gastoCombustivel = precoGasolina * (distancia / consumo);
    console.log(gastoCombustivel.toFixed(2));
}




/* const Consumo = preco / distancia
const Distancia = preco / consumo */


