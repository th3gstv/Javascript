//Length: Pega a quantidade de caractéres de uma string
/*
let code = '12345678';
if(code.length == 8){
  //Verify
  document.write('Succesfuly (By code.length)')
}
*/

//Index0f: Pega a posição da palavra no texto
/*
var text1 = "My name is Gustavo";
if(text1.indexOf('name') != '-1'){
  ('This word exist in the text!')
}else{
  alert('This word does not exist!')
}
*/

//Substring: Pega textos de uma posição inicial até uma posição final
/*
let text2 = 'This is my best text ever';
let position = text2.indexOf('text');
console.log(text2.substring(position, position + 9));
*/

//Substr: Inicia no caracter inicial e pega uma quantidade a frente
/*
let text3 = 'This is a example of a text';
console.log(text3.substr(23, 4));
*/

//Replace: Substitui palavras
/*
let ofensivetext = 'You are a motherfucker'
let editedtext = ofensivetext.replace('motherfucker', '@#!$')
console.log(editedtext);
*/

//Trim: Corta os espaços em branco no começo e no final
/*
let text4 = '           Hello, World!          ';
let text4edited = console.log(text4.trim());
console.log(text4);
*/

//Split: Cortando palavras selecionadas
/*
let text = 'Credit Card;5x';
let textedt = text.split(';');
console.log('Payment method: '+textedt[0]+' - Intallments: '+textedt[1])

let phone = '(31) 98765-4321';
let phone1 = phone.split(' ');
console.log('DDD is: '+phone1[0]+' | Phone number: '+phone1[1]);
*/

//toFixed = Quantidade de casas decimais após a vírgula
let price = 3.14159;
let formated_price = price.toFixed(2);
console.log(formated_price);