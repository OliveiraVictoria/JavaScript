/*Crie uma classe para representar pessoas e um metodo para IMC*/

class Pessoa{
    nome;
    altura;
    peso;

    constructor(nome, altura, peso){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calculaIMC(){
       return this.peso / (this.altura * this.altura);
    }
}

const jose = new Pessoa ("José", 1.75, 70);
console.log(jose.calculaIMC());