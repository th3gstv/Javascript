let allProducts = [
  'Macarrão', 'Arroz', 'Feijão', 'Batata', 'Carne'
];

var html = '<b>';
for(let q in allProducts){
  //console.log('Indice ' +q+ ' reference by ' +allProducts[q]);
  html += allProducts[q] + ', ';
}
html += '</b>'
document.querySelector('.List').innerHTML = html;