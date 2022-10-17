var elUsername = document.getElementById('username');
var elMsg      = document.getElementById('feedback');

function checkUsername(minlength){
    if (elUsername.value.length < minlength){
        elMsg.innerHTML = 'Username must be ' + minlength + 'character or more';
    }else {
        elMsg.innerHTML = '';
    }
}

elUername.addEventListener('blur',function (){
    checkUsername(5);
},false);