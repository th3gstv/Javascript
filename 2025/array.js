const wishlist = [
  "Oblak",
  "Asencio", "De Ligt", "Alexander Arnold", "Davies",
  "Xavi Simons", "Valverde", "Bellingham",
  "Lamine Yamal", "Vini Jr", "Mbappe"
];

wishlist.push("Hansi Flick (Manager)"); // push - Add an item on the array's last position 
console.log(wishlist);

wishlist.pop(); // pop - Delete the last array item | shift - Delete the first item
console.log(wishlist);

wishlist.unshift("Neymar Jr"); // unshift - Add a item on the array's first position
console.log(wishlist); 


console.log(`Number of players: ${wishlist.length}`);
console.log(`Captain: ${wishlist[6]}`);
console.log(`Free-Kick: ${wishlist[8]}`);
console.log(`Corners: ${wishlist[3]}`);