//selecionando elementos
const botao = document.querySelector('#botao');
const mensagem = document.querySelector('#mensagem');

// adicionando evento de click
botao.addEventListener('click', mostrar); 

// adicionando função para mostrar a mensagem
function mostrar(){

    //para alternar a mensagem quando clicar no botão
    mensagem.classList.toggle('mostrar');

   //se clicado irá mostrar a mensagem a baixo
    if (mensagem.classList.contains('mostrar')) {
        mensagem.innerHTML = 'Olá! Seja muito bem-vindo à minha página pessoal!<br> Nunca é tarde para começar algo novo. Dê o primeiro passo hoje!';
    } else {
     // se não clicar ficará em branco
        mensagem.innerHTML = '';
    }
};
