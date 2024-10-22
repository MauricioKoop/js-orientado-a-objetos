class retangulo {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }
}

let retangulos = new retangulo(12, 5);
console.log("O cálculo da área é: " + retangulos.calcArea());