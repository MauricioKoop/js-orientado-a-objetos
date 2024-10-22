class livro {
    constructor(titulo, autor, numPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }

    descrever(){
        return `O titulo do livro é: ${this.titulo}, o Autor do livro é: ${this.autor}, o número de páginas é ${this.numPaginas}`;
    }

    atualizarPaginas(updatePages) {
        this.numPaginas = updatePages;
    }
}

let umLivro = new livro("O pergaminho sagrado", "Severo Nerd", 180);
console.log(umLivro.descrever());
umLivro.atualizarPaginas(364);
console.log(umLivro.descrever());