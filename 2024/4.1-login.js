const rightmail = 'gstvoaugusto@gmail.com';
const rightpass = '1234!';

function verify(){
  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value;

  if(email != '' && password != ''){

    var result = this.login(email, password);

    if(result == true){
      alert("Login success! Hold a minute...")
    }else{
      alert("Login failed! Try again.")
    }

  }else{
    alert('Please, type something and try again!')
  }
}

function login(email, password){

  if(email == rightmail && password == rightpass){
    return true;
  }else{
    return false;
  }  
}