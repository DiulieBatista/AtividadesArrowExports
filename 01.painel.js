//AUTO PEÇAS-AUTOMOTIVAS
const {CadastrarPecas, listarPeças, ListaPorCodigo,ListaPorNome,ExcluirPeças,atualizarPeça}=require('./03.sistema_operacional')
const ler = require('readline-sync')

let check = true;

while (check) {
    
console.log("----------- menu de peças automotivas-------------------");
console.log("---------- Digite a oção desejada-----------------------");
console.log("1.Cadastrar produto-------------------------------------");
console.log("2.Lista produtos----------------------------------------");
console.log("3.Lista por codigo--------------------------------------");
console.log("4.Lista por peça  --------------------------------------");
console.log("5.altualizar produto------------------------------------");
console.log("6.Excluir  produto--------------------------------------");
console.log("7.sair do sistema---------------------------------------");

console.log("--------------------------------------------------------");
let opt =ler.questionInt("=>");

switch (opt ) {
    case 1:
    console.clear();
        CadastrarPecas ();

        break;
    case 2:
         console.clear();
         listarPeças();

        break;

    case 3:
        console.clear();
        ListaPorCodigo();
        break;

     case 4:
        console.clear();
        ListaPorNome();

        break;

    case 5:
        console.log();
      atualizarPeça();

        break;
    case 6:
        console.clear();
        ExcluirPeças();
        break;

    case 7:
        check =false;
        
        break;

    default:
console.log("opção inexistente tente novamente  ");
        break;
}};








