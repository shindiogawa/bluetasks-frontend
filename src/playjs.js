/*const n = 10;
let x = 20;
x = x + 10;

console.log(n);
console.log(x); */

// const v1 = 40.5;
// const v2 = 30;
// const v3 = false;
// const v4 = "olá softblue";
// // const v5 = "Eu tenho " + v2 + " anos";
// const v5 = `Eu tenho  ${v2}  anos`;
// console.log(v5);

// const x = 10;
// const y = "10";

// if(x !== y){
//     console.log("x e y sao iguais");
// }

// const numeros = [1, 2, 3, 4];

// console.log(numeros);

// const e =  numeros[1]
// console.log(e);

// const c = {
//     cor: "azul",
//     ano: "2010"
// };

// console.log(c.cor);

// const carros = [
//     {
//         cor: "vermelho",
//         ano: "2000"
//     },
//     {
//         cor: "branco",
//         ano: "2020"
//     },
//     {
//         cor: "amarelo",
//         ano: "1982"
//     }
// ];

// console.log(carros[2].ano);

// Spread Operator

// const letters = ["a", "b", "c"];

// console.log(...letters);

// const person = {
//     name: "Joao",
//     age: 20
// };

// const otherPerson = {
//     ...person,
//     hand: "left"
// }
// console.log(person);
// console.log(otherPerson);

function print(msg) {
    console.log(msg);
};

// const print2 = (msg)=>{
//     console.log(msg);
// };

// const print3 = (msg) => console.log(msg);

// const print4 = () => console.log("mensagem padrao");

// const mult = (a, b) => { return a * b };
// const mult2 = (a, b) =>  a * b ;

// print("voce esta na softblue");
// print2("voce esta na softblue 2 ");
// print3("voce esta na softblue 3 ");
// print4();
// const r = mult(2, 4);
// const r2 = mult2(4, 4);
// print(r);
// print(r2);


// class Carro {
    
//     constructor() {
//         this.velAtual = 0;
//     }

//     acelerar(v) {
//         this.velAtual += v;
//     }

//     velocidade(){
//         return this.velAtual;
//     }
// }

// const carro = new Carro();
// carro.acelerar(50);

// print(carro.velocidade());

// function somar(a , b){
//     return a + b;
// }
const somar = (a , b) => a + b;


// function multiplicar(a, b){
//     return a * b;
// }

// const multiplicar = (a, b) => a * b;

// function processar(v1,v2, op){
//     return op(v1,v2);
// }

// // const result = processar(4, 5, somar);
// const result = processar(4, 5, multiplicar);

// print(result);

const numeros = [1,2,3,4,5,6,7,8,9,10];

const mult = e => e * 2;

// print(numeros.map(mult));
// print(numeros.map(e => e * 2));

print(numeros.filter(v => v % 2 !== 0));