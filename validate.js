const nome = document.getElementById('nome');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const pwd = document.getElementById('pwd');
const pwd2 = document.getElementById('pwd2');
const cpf = document.getElementById('cpf');
const rg = document.getElementById('rg');
const lic = document.getElementById('lic');

function validade(item){
    item.setCustomValidity('');
    item.checkValidity();
    console.log(item);
    if (item == pwd2) {
        if (item.value === pwd.value){
             item.setCustomValidity('');
        } else {
            item.setCustomValidity('As informações das senhas informadas não coincidem.');
        }
    }
}

function maskTEL(){
    let srcTEL = tel.value;
    if (srcTEL.length == 1) tel.value = '(' + tel.value;
    if (srcTEL.length == 3) tel.value += ') ';
    if (srcTEL.length == 10) tel.value += '-';
}

function maskCPF(){
    let strCPF = cpf.value;
    if (strCPF.length == 3 || strCPF.length == 7) cpf.value += '.';
    if (strCPF.length == 11) cpf.value += '-';
}

pwd.addEventListener('input',  function(){validade(pwd)}  );
pwd2.addEventListener('input', function(){validade(pwd2)} );
nome.addEventListener('input', function(){validade(nome)} );

cpf.addEventListener('input', maskCPF);
tel.addEventListener('input', maskTEL);

const inputs = document.querySelectorAll('.input');

const handleFocus = ({target}) => { 
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({target}) => {

    if (target.value == '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

inputs.forEach(function(input){input.addEventListener('focus', handleFocus)});
inputs.forEach(function(input){input.addEventListener('blur', handleFocusOut)});