function getdados(){
  //Selecionando os valores
  var number1 = document.querySelector(".number1").value;
  var number2 = document.querySelector(".number2").value;
  //Selecionando a operação
  var operator = document.querySelector("#operator").value;
  //Mandando a leitura para o código interno
  var results = this.receptdados(number1, number2, operator)
  //Mostrando o resultado no HTML
  document.querySelector('#result').innerHTML = results;
}

function receptdados(number1, number2, operator){
  //Transformando "String" em "Valor Inteiro" 
  var number1 = parseInt(number1);
  var number2 = parseInt(number2);
  //Resolução do cálculo dependendo da operação
  if(operator == '+'){
    var result = number1 + number2
  }
  if(operator == '-'){
    var result = number1 - number2
  }
  if(operator == '*'){
    var result = number1 * number2
  }
  if(operator == '/'){
    var result = number1 / number2
  }
  //Retornando o resultado calculado
  return result;
}