let preco; 
console.log(preco); 
console.log(typeof preco); 

let numero = 10;
let texto = "5";
let resultadoImplicito = numero + texto;
console.log("Coerção implícita:");
console.log(resultadoImplicito);
console.log(typeof resultadoImplicito);
let valor = "20";
let resultadoExplicito = Number(valor);
console.log("Coerção explícita:");
console.log(resultadoExplicito);
console.log(typeof resultadoExplicito); 






let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 6 },
    { nome: "Carlos", nota: 7 },
    { nome: "Duda", nota: 5 },
    { nome: "Eduardo", nota: 9 },
    { nome: "Fernanda", nota: 6 },
    { nome: "Gabriel", nota: 8 },
    { nome: "Helena", nota: 4 },
    { nome: "Igor", nota: 7 },
    { nome: "Julia", nota: 5 }
];
let aprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log("Alunos aprovados:");
console.log(aprovados);