constructor /*é o que acontece quando uma pessoa é instânciada, ou seja, 
sempre que uma pessoa é instânciada, ela sempre passa pelo construtor*/

/*classe: é a definição do que deve ser aquele objeto
instancia: é a ocorrência*/


class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


const vick = new Pessoa();
vick.nome = "Victoria Oliveira";
vick.idade = 23;
console.log(vick);


/* Com as instâncias, eu não preciso alterar nada no meu código principal, eu crio uma instância
e faço uma chamada e assim eu não deixo nada repetido*/