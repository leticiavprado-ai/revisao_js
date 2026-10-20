//const resultado = '5' + 3; 
//console.log(resultado); 
// console.log(typeof resultado); 

//const resultado = '19'- 2; 
//console.log(resultado); 
//console.log(typeof resultado); 

//const textoDecimal '123.45' 
//const numeroConvertido = number (textoDecimal)
//const total = numeroConvertido + 10 
//console.log(total)
 
//console.log(boolean(0)); 
//console.log(boolean("")); 
//console.log(boolean(100));
//console.log(boolean("gato")); 

//let saldo = 100 
//saldo+= 50 
//saldo-= 20 
//saldo*= 2 
//saldo/= 4 
//console.log("saldo final:" saldo) 

//const idade = 20 
//const mensagem = idade >= 18 ? 'pode': 'nao' 
//console.log(mensagem) 

//const color = 'vermelho'; 
//switch (color) {
    //case vermelho:
    //console.log('pare')
      //  break;
    //case 'amarelo' 
    //console.log('atençao')
      // break;
    //case 'verde': 
    //console.log('siga'); 

//}  

//const frutas =['uva','pera','maça']; 
//for (const fruta of frutas){ 
//console.log("frutas da vez", fruta);
//}

//let j = 0;  
//while (j< 3) {
//console.log("valorde j:" , j); 
//j++; 
//} 


//let contador = 10; 
//while(contador>=0){ 
  //  console.log("contagem" , contador); 
    //contador--; 
//} 
//console.log("DECOLAR");

//const nums = [1, 2, 3, 4]; 
//const tripulo = nums.map (n => n * 3); 
//console.log(tripulo); 
//const idades = [12, 17,18, 22, 15, 30]; 
//const maiores = idades.filter (i => i >= 18); 
//console.log(maiores); 

// ATIVIDADE PARA ENTREGAR!

//const salarios = [1200, 50, 100, 1350, 300, 1450];
//const salarioAlto = salarios.filter(salario => salario >= 1000);
//const salarioBaixo = salarios.filter(salario => salario < 1000);
//console.log(salarioAlto);
//console.log(salarioBaixo); 

const comidas = ['banana', 'maça', 'uva', 'limão',b 'abobora', 'beterraba', 'rabanete'];
const frutas = comidas.filter(comida =>
    ['banana', 'maça', 'uva', 'limão'].includes(comida)
);
const legumes = comidas.filter(comida =>
    ['abobora', 'beterraba', 'rabanete'].includes(comida)
);
console.log(frutas);
console.log(legumes); 
