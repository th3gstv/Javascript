function calculate(){
  //Selecionando os valores
  var firstvalue = document.querySelector(".firstvalue").value;
  var secondvalue = document.querySelector(".secondvalue").value;
  //Transformando "String" em "Inteiro" 
  var firstvalue = parseInt(firstvalue);
  var secondvalue = parseInt(secondvalue);
  //Escolhendo a operação [ATENTAR-SE]
  var operation = document.querySelector("#operation").value;
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

  document.querySelector("#results").innerHTML = results;
}