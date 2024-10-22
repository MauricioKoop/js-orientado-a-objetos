// Definição de classe
class pessoa {
    constructor(nome, idade) {
        this.nome = nome; //propriedade
        this.idade = idade; //propriedade
    }

    // Metodo
    comprimentar() {
        console.log(`Olá meu nome é: ${this.nome}, eu tenho: ${this.idade} anos`);
    }
}

const pessoal = new pessoa("Eduardo", "26");
pessoal.comprimentar();