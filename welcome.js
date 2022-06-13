function myContinue(){
    if (document.querySelector('#pass').value==1){
        window.location.href="banktype.html";
    }
    if(document.querySelector('#pass').value==2){
        window.location.href="transfer.html";
    }
    let AccBalance =1000900;
    if(document.querySelector('#pass').value==3){
        window.location.href="balance.html";
    }


}