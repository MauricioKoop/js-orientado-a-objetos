class animal {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    descrever() {
        return `Nome: ${this.nome}, idade: ${this.idade}, tipo: ${this.tipo}`;
    }
}

class cachorro extends animal {
    constructor(nome, idade, raca) {
        super(nome, idade, "Cachorro");
        this.raca = raca;
    }

    latir() {
        return `${this.nome} está latindo au au!`;
    }
}

let meuCachorro = new cachorro("Hex", 6, "Caramelo");
console.log(meuCachorro.descrever());
console.log(meuCachorro.latir());