const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 800) {
            menu.style.display = "none";
        }
    });
});

document.querySelectorAll(".cta").forEach(botao => {
    botao.addEventListener("click", () => {
        document.querySelector("#planos").scrollIntoView({
            behavior: "smooth"
        });
    });
});

const telas = [
    {
        titulo: "Tela inicial",
        descricao: "Acesso rápido aos lembretes, atividades e conexão com a família."
    },
    {
        titulo: "Meus compromissos",
        descricao: "Lista de medicamentos, consultas, atividades e outros compromissos."
    },
    {
        titulo: "Novo lembrete",
        descricao: "Permite criar um lembrete escolhendo horário, data e forma de aviso."
    },
    {
        titulo: "Atividades",
        descricao: "Ajuda o idoso a encontrar atividades de convivência e bem-estar."
    },
    {
        titulo: "Acessibilidade",
        descricao: "Permite ajustar o tamanho do texto e outros recursos de visualização."
    }
];

let telaAtual = 0;

function atualizarTela() {
    document.querySelector("#screen-title").textContent =
        telas[telaAtual].titulo;

    document.querySelector("#screen-description").textContent =
        telas[telaAtual].descricao;
}

function proximaTela() {
    telaAtual++;

    if (telaAtual >= telas.length) {
        telaAtual = 0;
 }