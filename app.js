let email = document.getElementById('email')
let senha = document.getElementById('senha')
let mensagem = document.querySelector('.mensagem')
let botaoAlbuns = document.querySelector('.botaoAlbuns')
mensagem.classList.add('escondido')


let emailCorreto = "email"
let senhaCorreta = "senha"

function login(){
    if(email.value == emailCorreto && senha.value == senhaCorreta){
        mensagem.classList.remove('escondido')
        mensagem.textContent = "Email e senha estão corretos"
    }
    else{
        mensagem.classList.remove('escondido')
        mensagem.textContent = "Email ou senha estão incorretos"
        email.value = ''
        senha.value = ''
    }
}