/*shift + acento (no teclado)*/


const pessoa = {
    nome: "Victoria Oliveira",
    idade: 23, 

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

/*pessoa.descrever();*/

/* Para acessar um valor de forma mais dinâmica podemos fazer da seguinte forma:
isso faz com que caso você não saiba o nome de algum atributo, você pode receber esse nome como parâmetro,
deixando assim as possibilidades infinitas*/

/*console.log(pessoa[atributo]);*/
console.log(pessoa['nome']);

/* você poode imprir das três formas 
pessoa.descrever();
console.log(pessoa[atributo]);
console.log(pessoa['nome']);*/