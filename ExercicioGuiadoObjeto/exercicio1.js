 /* Crie uma classe para representar carros e um metodo para calcular gasto medio por KM e o combustivel que
 será usado!*/


class Carro{
    cor;
    marca;
    gastoMedio;

    constructor(cor, marca, gastoMedio) {
        this.cor = cor;
        this.marca = marca;
        this.gastoMedio = gastoMedio;
    }

     calcularGastoPorKM(distanciaKM, precoCombustivel) {
        return distanciaKM * this.gastoMedio * precoCombustivel;
    }
}

const carroAzul = new Carro("Gol", "cor Azul", 1/12);
console.log(carroAzul.calcularGastoPorKM(50, 5));