class aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.notas = [];
    }

    adicionarNotas(nota) {
        this.notas.push(nota);
    }

    calcularMedia() {
        let somaNotas = this.notas.reduce((ant, atual) => { return ant + atual });
        let mediaNotas = somaNotas / this.notas.length
        return mediaNotas.toFixed(2);
    }

    escrever() {
        return `Aluno: ${this.nome}, Idade: ${this.idade}, média escolar: ${this.calcularMedia()}`;
    }
}

let alunoEduardo = new aluno("Anne", "23");
alunoEduardo.adicionarNotas(10);
alunoEduardo.adicionarNotas(9);
alunoEduardo.adicionarNotas(9);

alunoEduardo.calcularMedia();
console.log(alunoEduardo.escrever());