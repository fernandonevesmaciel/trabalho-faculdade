const botao = document.querySelector('#botao');
const mensagem = document.querySelector('#mensagem');

botao.addEventListener('click', mostrar); 

function mostrar(){

    mensagem.classList.toggle('mostrar');

   
    if (mensagem.classList.contains('mostrar')) {
        mensagem.innerHTML = 'Olá! Seja muito bem-vindo à minha página pessoal!<br> Nunca é tarde para começar algo novo. Dê o primeiro passo hoje!';
    } else {
     
        mensagem.innerHTML = '';
    }
};
