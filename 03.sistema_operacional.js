const ler = require('readline-sync');
const automotivas=require('./02.banco_dados');

const  CadastrarPecas = () =>{ // captar os  dados do usuario para cadastrar um novo produto;

let x =automotivas.length;
let codigo = x + 1; // procurar uma maneira de susbistuir a adição de novo id 
let peça= ler.question(" imforme a peça a ser cadstrada :");
let estoque = ler.questionInt("imforme a quantidade de peças :");
let valor = ler.questionFloat(" imforme o valor da peça :");
let marca= ler.question("imforme a marca  da peça:");
AddPeças (codigo, peça,estoque,valor,marca);

};

const AddPeças = (codigo, peça,estoque,valor,marca)=> {

automotivas.push({codigo:codigo,peça:peça,estoque:estoque,valor:valor,marca: marca});// realiza a atribuição da varaiaveis que estão dentro do arrys a receber os dados do usuario 
console.log("cadastro realizado com sucesso");
ler.question("Precione enter para voltar ao menu");
console.clear();// apos o codigo rodar vai apagar os dados e  voltar ao menu pricipal 

};

 const listarPeças =()=> {
//   foi usado o for Each para exibir tudo que esta declarado dentro do arrys
 automotivas .forEach(exibir=> console.log(// a variavel  exibir e atribuida as variveis declaradas dentro do arrys 
      `codigo ${exibir.codigo} ----
       peça:${exibir.peça}---------
       estoque: ${exibir.estoque} -
       valor: ${exibir.valor} -----
       marca:${exibir.marca} ------
       ----------------------------`

 ));
ler.question("Precione enter para voltar ao menu");
console.clear();
 }



























































module.exports= {CadastrarPecas,listarPeças};

