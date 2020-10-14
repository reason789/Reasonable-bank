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
    // const depositAmount = document.getElementById('pickDeposit').value;
    // var depositNumber = parseFloat(depositAmount);
    const depositNumber= getInputNumber("pickDeposit");
    
    updateSpanText('currentDeposit',depositNumber);
    updateSpanText('currentBalance',depositNumber);


    document.getElementById('pickDeposit').value = "";
})

// Withdraw button event handler

const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdrawAmount');
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1*withdrawNumber);

    document.getElementById('withdrawAmount').value = "";
})

function getInputNumber(id){
    const withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}

function updateSpanText(id,depositNumber)
{
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + depositNumber;

    document.getElementById(id).innerText = totalBalance;
}