// Espera o documento carregar antes de rodar o script
document.addEventListener('DOMContentLoaded', function() {
// Pega o botão pelo ID
const botao = document.getElementById('meu-botao');
// Adiciona um "ouvinte" de clique
botao.addEventListener('click', function() {
alert('Obrigado por visitar! A jornada em IA está apenas
começando!');
});
});