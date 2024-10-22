// Crie três variáveis: uma string, um número e um booleano. Atribua valores a essas variáveis e exiba seus tipos no console.
let userName = "Eduardo";
let age = 26;
let masculineGender = true;

console.log(userName);
console.log(age);
console.log(masculineGender);

console.log("*---------------*-------------------*");

// Crie um objeto carro com propriedades marca, modelo e ano. Exiba cada uma das propriedades no console.
const car = {
    marca: "Chevrolet",
    modelo: "Sedan",
    ano: 2020,
    cor: "Azul"
}

console.log(car.marca);
console.log(car.modelo);
console.log(car.ano);

// Adicione uma nova propriedade cor ao objeto carro do exercício anterior e defina um valor para ela. Exiba a propriedade cor no console.
console.log(car.cor);

// Atualize o valor da propriedade ano do objeto carro para 2022. Verifique a mudança exibindo o valor atualizado no console.
car.ano = 2022;
console.log(car.ano);

// Crie uma função que receba dois números e retorne a soma, subtração, multiplicação e divisão desses números. Exiba os resultados no console.
function basicCalculation(n1, n2) {
    console.log("A soma dos números informados é: " + (n1 + n2));
    console.log("A subtração dos números informados é: " + (n1 - n2));
    console.log("A multiplicação dos números informados é: " + (n1 * n2));
    console.log("A divisão dos números informados é: " + (n1 / n2));
}

basicCalculation(25, 13);