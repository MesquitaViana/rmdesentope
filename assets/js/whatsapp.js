/* ==========================================
   CONFIGURAÇÃO
========================================== */

const WHATSAPP_NUMBER = "5511972564867";

/* ==========================================
   FORMULÁRIO DE ORÇAMENTO
========================================== */

const budgetForm = document.getElementById("budgetForm");

if (budgetForm) {

    budgetForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const nome =
            document.getElementById("budgetName").value;

        const telefone =
            document.getElementById("budgetPhone").value;

        const servico =
            document.getElementById("budgetService").value;

        const urgencia =
            document.getElementById("budgetUrgency").value;

        const local =
            document.getElementById("budgetLocation").value;

        const descricao =
            document.getElementById("budgetMessage").value;

        const mensagem =

`Olá, gostaria de solicitar um orçamento.

👤 Nome: ${nome}

📞 Telefone: ${telefone}

🔧 Serviço: ${servico}

⚡ Urgência: ${urgencia}

📍 Local: ${local}

📝 Descrição:
${descricao}`;

        const url =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

}

/* ==========================================
   FORMULÁRIO DE CONTATO
========================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const nome =
            document.getElementById("contactName").value;

        const telefone =
            document.getElementById("contactPhone").value;

        const assunto =
            document.getElementById("contactSubject").value;

        const mensagemCliente =
            document.getElementById("contactMessage").value;

        const mensagem =

`Olá, entrei em contato através do site.

👤 Nome: ${nome}

📞 Telefone: ${telefone}

📌 Assunto: ${assunto}

📝 Mensagem:
${mensagemCliente}`;

        const url =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

}

/* ==========================================
   BOTÕES WHATSAPP
========================================== */

document
.querySelectorAll("[data-whatsapp]")
.forEach(button => {

    button.addEventListener("click", () => {

        const mensagem =
            button.dataset.message ||
            "Olá, vim através do site e gostaria de mais informações.";

        const url =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

});
