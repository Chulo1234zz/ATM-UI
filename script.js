let user='Jerry';
let AccBalance =1000900;
let PassCode = 2346;
function formValid(){
    var validPass=document.querySelector('#pass').value;
    if(validPass.length>4){
        document.getElementById("vaild-pass").innerHTML = "Maximum of 4 characters";
        return false;
    }
}
function show() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("showimg").src =
        "https://static.thenounproject.com/png/777494-200.png";
    } else {
      x.type = "password";
      document.getElementById("showimg").src =
        "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
    }
  }
  function myFunction(){
if (document.querySelector('#pass').value==2346){
  
        window.location.href="welcome.html";
    }
    else{
        alert('INVALID PIN')
        location.reload();
    }
}
document.addEventListener('keydown', function(e){
  /* console.log(e.key); */

  if (e.key === 'Enter'){
    if (document.querySelector('#pass').value==2346){
  
      window.location.href="welcome.html";
  }
  else{
      alert('INVALID PIN')
      location.reload();
  }
}
  }
);
