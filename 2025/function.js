function scout(player, team){
  return `${player} hired for play at ${team}`;
}

const returnScout = scout("Lamine Yamal", "Barcelona FC");
console.log(returnScout);


const correctEmail = "contato@gmail.com";
const correctPassword = "1234";

function login(email, password){
  //Verify if the parameters is correct!
  if(email == correctEmail && password == correctPassword){
    return true;
  }else{
    return false;
  }
}

const loginResult = login("contato@gmail.com", "1q234");
console.log(loginResult);