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
      `codigo: ${exibir.codigo} ----
       peça:${exibir.peça}---------
       estoque: ${exibir.estoque} -
       valor: ${exibir.valor} -----
       marca:${exibir.marca} ------
       ----------------------------`

 ));
ler.question("Precione enter para voltar ao menu");
console.clear();
 }

 const ListaPorCodigo = ()=>{
      let check= true;// enquanto o codigo for verdadeiro vai ficar rodando dentro do loop 
      while (check) {// lop de repetição 
      
      let cod = ler.questionInt(" imforme o codigo do produto : ");
      let buscar = automotivas.find(busc => busc.codigo === cod) // a varaiavel recebe a variavel codigo 
      if (buscar) { 
             console.log( 
              `Codigo: ${buscar.codigo}-------------
              Peça: ${buscar.peça}----------
              Estoque: ${buscar.estoque}----
              preço: ${buscar.valor}-------
              marca: ${buscar.marca}`
          );
          console.log("------------------------------");
          let opt =ler.questionInt("deseja buscar  outro  produto ? 1.SIM -2.NAO: ");
          if (opt=== 1 ) {
              console.clear();
          
      
          } else {
              check= false;
              console.clear();
      
          }
      }else{
          console.clear();
          console.log("....");
          console.log("produto não encontrado!!");
      }
      }
      };

      const ListaPorNome = ()=>{
            let check= true;// enquanto o codigo for verdadeiro vai ficar rodando dentro do loop 
            while (check) {// lop de repetição 
            
            let nome  = ler.question(" imforme o nome da peça  : ").toLowerCase();
            let buscar = automotivas.find(busc => busc.peça === nome ) // a varaiavel recebe a variavel codigo 
            if (buscar) { 
                   console.log( 
                   
                     `Peça: ${buscar.peça}----------
                    Codigo: ${buscar.codigo}-------------
                    Estoque: ${buscar.estoque}----
                    valor: ${buscar.valor}-------
                    marca: ${buscar.marca}`
                );
                console.log("------------------------------");
                let opt =ler.question("deseja buscar  outro  produto ? 1.SIM -2.NAO: ");// conserta o por que o codigo não funciona
                if (opt=== 1 ) {
                    console.clear();
                  
                }else {
                    check= false;
                    console.clear();
            
                }
            }else{
                check= false;
                console.log("....");
                console.log("produto não encontrado!!");
                console.clear();
            }
            }
            };

      const ExcluirPeças=() => {// excluir os dados do codigo selecionado 
  
          let check= true;
          while (check) {
          
          let cod = ler.questionInt(" imforme o ID do produto : ");
          let produto= automotivas.find(prod => prod.codigo === cod );
          let codigo_ex = automotivas.findIndex(prod => prod.codigo=== cod );
  
          if (produto) { 
                 console.log( 
                  `codigo : ${produto.codigo}-------------
                  Peça : ${produto.peça}
                  Estoque : ${produto.estoque}
                  preço : ${produto.valor}
                  Marca : ${produto.marca}`
              );
              console.log("------------------------------");
              let opt =ler.questionInt("tem certeza que deseja excluir o Produto ? 1.SIM -2.NAO: ");// if e else com  a interrogação  
              if (opt=== 1 ) {
                  automotivas.splice(codigo_ex,1);
                  console.log("produto excluido  com sucesso!!");
                  console.log("....");
                  ler.question("pressione Enter para voltar ao MENU");
                  check= false;
  
              } else {
                  check= false;
                  console.clear();
          
              }
          }else{
              console.clear();
              console.log("....");
              console.log("produto não encontrado!!");
          }
          }
          };

          const atualizarPeça =() =>{  // função para atualização dos produtos apos fazer a buscar por codigo do produto 

            let check= true;
            while (check) {
            
            let Atualizar = ler.questionInt(" imforme o codigo da peça : ");
            let produto = automotivas.find(prod => prod.codigo ===Atualizar )
            if (produto) { 
                  console.log( 
                        `codigo : ${produto.codigo}-------------
                        Peça : ${produto.peça}
                        Estoque : ${produto.estoque}
                        preço : ${produto.valor}
                        Marca : ${produto.marca}`
                );
                console.log("------------------------------");
                let opt =ler.questionInt("deseja alterar esse produto ? 1.SIM -2.NAO: ");
                if (opt=== 1 ) {
                    console.clear();
                    AddPecas (Atualizar)
                    check= false;
            
                } else {
                    console.clear();
            
                }
            }else{
                console.clear();
                console.log("....");
                console.log("produto não encontrado!!");
            }
            }
            };

            
               const AddPecas = (cod) => { // função para atribuiir os dados da novas peças a função atualizar  

                  let produto= automotivas.find(prod=>prod.codigo === cod);
                  let attpeça= ler.question(` imforme a nova peça   ${produto.peça}`);
                  let attqtd= ler.questionInt(` imforme a nova quantidade do estoque  ${produto.estoque}`);
                  let attvalor= ler.questionFloat(` imforme o novo valor da peça ${produto.valor}`);
                  let attmarca = ler.question(`imforme a nova marca do produto ${produto.marca}`);

                  produto.peça=attpeça;
                  produto.estoque =attqtd;
                  produto.valor=attvalor;
                  produto.marca=attmarca;

                  console.log("produto alterado com sucesso!!");
                  console.log( 
                      `codigo  : ${produto.codigo}-------------
                       peça : ${produto.peça} -------------
                      quantidade : ${produto.estoque} --------
                      preço : ${produto.valor} --------------
                      marca : ${produto.marca}`
                  );
                  
                  console.log("....");
                  ler.question("pressione Enter para voltar ao MENU");
                  console.clear();

            };
                  

module.exports= {CadastrarPecas,listarPeças,ListaPorCodigo,ListaPorNome,ExcluirPeças,atualizarPeça}; // função para exporta as funcions em outra  pagina .

