// Lógica para o Menu responsivo em resoluções abaixo de 600px
var botaoA = document.querySelector('.menu-abrir').onclick = function() {
    document.documentElement.classList.add('menu-ativo');
}

var botaoB = document.querySelector('.menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
}

var botaoO = document.documentElement.onclick = function(event) {
    if(event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
}