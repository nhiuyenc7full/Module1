const CONVERT = 23000;

function convert1(){

    let from = document.getElementById('fromId').value;
    let to = document.getElementById('toId').value;
    let amount = +document.getElementById('amount').value;

    let fVND = from === 'VND';
    let fUSD = from === 'USD';
    let tVND = to === 'VND';
    let tUSD = to ==='USD';

    const vietmy = 1/CONVERT;
    const myviet = CONVERT;

    let convert;

    if (fVND && tVND) {
        convert = amount;
    } else if (fVND && tUSD) {
        convert = amount*vietmy;
    } else if (fUSD && tVND) {
        convert = amount*myviet;
    } else convert = amount;  

    if (amount < 0) {
        alert('Enter amount again!')
    } else if (amount >= 0){
    document.getElementById('kq').innerHTML = "Result: " + convert + ' ' + to;   
    } else {
        alert('Enter amount again!')
    }
    
}