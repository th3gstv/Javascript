function calculate(){
  //Selecionando os valores
  var firstvalue = document.querySelector(".firstvalue").value;
  var secondvalue = document.querySelector(".secondvalue").value;

  //Selecionando a operação
  var operation = document.querySelector("#operation").value;

  //Mandando a leitura para o código interno
  var result = this.InsideCalculate(firstvalue, secondvalue, operation);
  
  document.querySelector('#results').innerHTML = result;
}

function InsideCalculate(firstvalue, secondvalue, operation){
  //Transformando "String" em "Valor Inteiro" 
  var firstvalue = parseInt(firstvalue);
  var secondvalue = parseInt(secondvalue);

  //Resolução do cálculo dependendo da operação
  if(operation == "+"){
    var results = firstvalue + secondvalue;
  } 

  if(operation == '-'){
    var results = firstvalue - secondvalue;
  }

  if(operation == '*'){
    var results = firstvalue * secondvalue;
  }

  if(operation == '/'){
    var results = firstvalue / secondvalue;
  }

  return results;
}