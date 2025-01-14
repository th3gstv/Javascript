let nome = "Neymar Jr"; //Escopo do arquivo

function returnName(){
  function returnAge(){
    let age = 24;
  }
  return nome; //Escopo da função
  return age; //Tentativa falha de acessar algo dentro do escopo da função returnAge() 
}
console.log(returnName())

//Variáveis do Escopo Externo podem ser acessadas no Escopo Interno

//Variáveis do Escopo Interno não podem ser acessadas no Escopo Externo