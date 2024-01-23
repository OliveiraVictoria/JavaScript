class Pessoa{
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }


    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else {
        console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`);
    }
}

const vick = new Pessoa('Victoria', 23);
const wallace = new Pessoa('Wallace', 25);

compararPessoa(vick, wallace);
