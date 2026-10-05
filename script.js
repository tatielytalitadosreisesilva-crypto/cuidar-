const menuBtn = document.querySelector("#menuToggle");
const menu = document.querySelector("#mainNav");

menuBtn.addEventListener("click", () => {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});

document.querySelectorAll("#mainNav a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 800) {
            menu.style.display = "none";
        }
    });
});




document.querySelectorAll(".select-plan").forEach(botao => {
    botao.addEventListener("click", () => {
        alert("Você escolheu o plano " + botao.dataset.plan);
    });
});




document.querySelectorAll(".nav-cta, .hero-actions .btn-primary").forEach(botao => {
    botao.addEventListener("click", () => {
        document.querySelector("#planos").scrollIntoView({
            behavior: "smooth"
        });
    });
});




const telas = [
    {
        titulo: "Tela inicial do idoso",
        descricao: "Visão rápida dos próximos avisos, compromissos, atividades e acesso à família.",
        imagem: "imagens/pagina inicial.jpeg"
    },

    {
        titulo: "Login",
        descricao: "Tela de acesso para entrar no aplicativo Cuidar+.",
        imagem: "imagens/login.jpeg"
    },

    {
        titulo: "Meus compromissos",
        descricao: "Lista de medicamentos, consultas, atividades e outros compromissos.",
        imagem: "imagens/compromossos.jpeg"
    },

    {
        titulo: "Novo lembrete",
        descricao: "Permite criar um lembrete escolhendo data e horário.",
        imagem: "imagens/lembrete.jpeg"
    },

    {
        titulo: "Atividades",
        descricao: "Ajuda o idoso a encontrar atividades de convivência e bem-estar.",
        imagem: "imagens/atividades.jpeg"
    },

    {
        titulo: "Acessibilidade",
        descricao: "Permite ajustar recursos para facilitar a visualização e utilização do aplicativo.",
        imagem: "imagens/acessibilidade.jpeg"
    }
];


let telaAtual = 0;



function atualizarTela() {

    document.querySelector("#screenImage").src =
        telas[telaAtual].imagem;

    document.querySelector("#screenTitle").textContent =
        telas[telaAtual].titulo;

    document.querySelector("#screenText").textContent =
        telas[telaAtual].descricao;

    document.querySelector("#slideCount").textContent =
        `${telaAtual + 1} / ${telas.length}`;



    document.querySelectorAll(".screen-thumb").forEach((thumb, index) => {

        if (index === telaAtual) {
            thumb.classList.add("active");
        } else {
            thumb.classList.remove("active");
        }

    });
}



document.querySelector("#nextScreen").addEventListener("click", () => {

    telaAtual++;

    if (telaAtual >= telas.length) {
        telaAtual = 0;
    }

    atualizarTela();

});




document.querySelector("#prevScreen").addEventListener("click", () => {

    telaAtual--;

    if (telaAtual < 0) {
        telaAtual = telas.length - 1;
    }

    atualizarTela();

});




document.querySelectorAll(".screen-thumb").forEach(thumb => {

    thumb.addEventListener("click", () => {

        telaAtual = Number(thumb.dataset.index);

        atualizarTela();

    });

});



atualizarTela();



const demoButton = document.querySelector("#demoButton");
const demoModal = document.querySelector("#demoModal");
const closeModal = document.querySelector("#closeModal");

demoButton.addEventListener("click", () => {
    demoModal.classList.add("active");
    demoModal.setAttribute("aria-hidden", "false");
});

closeModal.addEventListener("click", () => {
    demoModal.classList.remove("active");
    demoModal.setAttribute("aria-hidden", "true");
});


document.querySelector("#demoForm").addEventListener("submit", (event) => {

    event.preventDefault();

    document.querySelector("#formMessage").textContent =
        "Contato enviado com sucesso!";

});