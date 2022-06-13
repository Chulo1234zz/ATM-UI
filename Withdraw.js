let AccBalance =1000900;
document.write(`Your Account Balance is ${AccBalance}`);
function myFunction(){
     let amount=document.querySelector('#pass').value/*<=10009000*/
     if(amount<=AccBalance)  {
    alert(`Debit 
        Amount: NGN${amount}.00 DR
        Acc:203*****10
        Desc: ATM VENDING MACHINE UBA BANK
        Avail Bal: NGN${AccBalance-amount}
        For More Info Call 09059005798
        `)
        window.location.href="withdrawtransaction.html" }
    
        
     else{
         alert('INSUFFICIENT BALANCE')
     }
    }