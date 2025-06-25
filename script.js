// Espera o DOM estar carregado (script com defer já garante isso)
const btn = document.getElementById('alertBtn');

btn.addEventListener('click', () => {
  alert('Olá! Você clicou no botão!');
});
