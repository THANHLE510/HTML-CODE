var score = 75;
var msg;

if (score >= 50){
    msg = 'Congratulation!';
    msg += 'Proceed to the next roundl.';
}

var el = document.getElementById('answer');
el.textContent = msg;