let = brinquedo *brinquedo_favorito*;

console.log (brinquedo) 

let roupas = {"nome:blusa",quantidade:2}
console.log(quantidades de roupas) 

let objeto = 4 
console.log(objetos) 

 

const comidas = ['banana', 'maça', 'uva', 'limão',b 'abobora', 'beterraba', 'rabanete'];
const frutas = comidas.filter(comida =>
    ['banana', 'maça', 'uva', 'limão'].includes(comida)
);
const legumes = comidas.filter(comida =>
    ['abobora', 'beterraba', 'rabanete'].includes(comida)
);
console.log(frutas);
console.log(legumes); 








const salarios = [1200, 50, 100, 1350, 300, 1450];
const salarioAlto = salarios.filter(salario => salario >= 1000);
const salarioBaixo = salarios.filter(salario => salario < 1000);
console.log(salarioAlto);
console.log(salarioBaixo);