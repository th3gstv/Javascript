function make(){
  //Selecionando os valores
  var first = document.querySelector(".number1").value;
  var second = document.querySelector(".number2").value;

  //Transformando "String" em "Inteiro" 
  var first = parseInt(first);
  var second = parseInt(second);

  //Escolhendo a operação
  var operation = document.querySelector("#operation").value;

  //Resolução do cálculo dependendo da operação
  if(operation == '+'){
    var result = first + second;
  }

  if(operation == '-'){
    var result =  first - second;
  }

  if(operation == '*'){
    var result = first * second;
  }

  if(operation == '/'){
    var result = first / second;
  }

  //Mostrando o meu resultado na tela
  document.querySelector('#result').innerHTML = result;
}