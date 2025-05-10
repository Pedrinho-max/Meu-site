// Exibe uma saudação com base na hora atual
function exibirSaudacao() {
    const saudacao = document.getElementById("saudacao");
    const hora = new Date().getHours();

    if (hora < 12) {
        saudacao.textContent = "Bom dia!";
    } else if (hora < 18) {
        saudacao.textContent = "Boa tarde!";
    } else {
        saudacao.textContent = "Boa noite!";
    }
}

// Alerta quando o botão é clicado
function acaoBotao() {
    alert("Está tudo certo!");
}

// Executa a saudação ao carregar a página
window.onload = exibirSaudacao;
