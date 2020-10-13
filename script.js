// Login button event handler

var btn = document.getElementById('login');
btn.addEventListener('click', function(){
    const area = document.getElementById('login-area');
    area.style.display = 'none';
    
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

// Deposit button event handler
var depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
    const depositAmount = document.getElementById('pickDeposit').value;
    var amount = parseFloat(depositAmount);
    console.log(amount);
})