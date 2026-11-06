// Dados dos projetos. Os textos descrevem propostas demonstrativas para o portal.
const dados = [
    {
        id: 1,
        titulo: "Sistema de Controle de Estoque (ValidaEstoque)",
        descricao: "Uma proposta de sistema para organizar produtos e acompanhar quantidades.",
        conteudo: "Este projeto que está sendo desenvolvido na universidade PUC Minas pelos alunos Ana Carolina, Henrique Pyramo, Lucas Leite, Michael de Oliveira, Prscilla Eduarda e Wallace Gabriel apresenta a ideia de um software para apoiar o controle de estoque. A proposta é reunir informações dos produtos em um só lugar, facilitar a consulta das quantidades disponíveis, ajudar no acompanhamento das movimentações, acompanhar a validade dos produtos e ser alertado ao produto chegar perto do vencimento. O sistema é voltado para pequenos comércios, lojas e pessoas que precisam organizar produtos de forma prática e eficiente.",
        categoria: "Sistemas",
        autor: "Wallace Gabriel Moreira da Silva",
        data: "2026-10-18",
        imagem: "images/ValidaEstoqueLogo.jpg",
        destaque: true,
        tecnologias: ["HTML5", "CSS3", "JavaScript"],
        publico: "Pequenos comércios, lojas e pessoas que precisam organizar produtos.",
        objetivo: "Demonstrar como uma aplicação web pode ajudar a organizar informações de estoque.",
        recursos: ["Organização de produtos", "Consulta de quantidades", "Acompanhamento de movimentações", "Visualização de informações"],
        fotos: [
            { titulo: "Tela Principal ValidaEstoque", imagem: "images/TelaPrincipal.png" },
            { titulo: "Tela de Login ValidaEstoque", imagem: "images/TelaLogin.png" }
        ]
    },
    {
        id: 2,
        titulo: "Portfólio de Desenvolvedor",
        descricao: "Página para apresentar projetos, conhecimentos e trajetória profissional.",
        conteudo: "O portfólio é uma página pessoal que reúne informações sobre o desenvolvedor. A proposta é apresentar sua trajetória, destacar conhecimentos técnicos e organizar projetos em uma vitrine digital de fácil navegação.",
        categoria: "Desenvolvimento Web",
        autor: "Wallace Gabriel Moreira da Silva",
        data: "2026-10-18",
        imagem: "images/portfolio.png",
        destaque: true,
        tecnologias: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        publico: "Estudantes, profissionais iniciantes e desenvolvedores.",
        objetivo: "Apresentar o perfil profissional e facilitar o acesso aos trabalhos desenvolvidos.",
        recursos: ["Apresentação pessoal", "Seção de habilidades", "Galeria de projetos", "Links de contato"],
        fotos: [
            { titulo: "Apresentação do perfil profissional", imagem: "images/portfolio-galeria.png" },
            { titulo: "Visualização do portfólio", imagem: "images/portfolio.png" }
        ]
    },
    {
        id: 3,
        titulo: "Calculadora Web",
        descricao: "Aplicação web para realizar operações matemáticas com interface responsiva e integração com uma API em C#.",
        conteudo: "A Calculadora Web foi desenvolvida como prática de programação e desenvolvimento web. O projeto utiliza C# e ASP.NET Core no back-end para disponibilizar uma API responsável pelos cálculos, enquanto HTML, CSS e JavaScript compõem a interface e controlam a interação com os botões. A comunicação entre a página e o servidor é realizada por meio de requisições fetch().",
        categoria: "Desenvolvimento Web",
        autor: "Wallace Gabriel Moreira da Silva",
        data: null,
        imagem: "images/calc.png",
        destaque: true,
        tecnologias: ["C#", "ASP.NET Core", "HTML5", "CSS3", "JavaScript"],
        publico: "Pessoas que precisam realizar operações matemáticas básicas e estudantes interessados em desenvolvimento web.",
        objetivo: "Praticar a criação de uma aplicação web integrada a uma API, conectando a interface do usuário à lógica de cálculo no servidor.",
        recursos: ["Adição, subtração, multiplicação e divisão", "Entrada de números inteiros e decimais", "Limpeza dos valores e alteração de sinal", "Cálculo de porcentagem e exclusão do último dígito", "Tratamento de divisão por zero", "Comunicação com API desenvolvida em C#"],
        repositorio: "https://github.com/DEVWGMS/CalculadoraSimples",
        fotos: [
            { titulo: "Interface da Calculadora Web", imagem: "images/Calc.png" },
            { titulo: "Visualização da interface em tela estreita", imagem: "images/calculadora-mobile.png" }
        ]
    }
];

// Formata a data para o padrão brasileiro.
function formatarData(data) {
    if (!data) return "Não informada";
    const partes = data.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

// Monta o carrossel com os projetos marcados como destaque.
function carregarCarrossel() {
    const area = document.getElementById("itens-carrossel");
    const indicadores = document.getElementById("indicadores-carrossel");

    if (!area || !indicadores) return;

    const destaques = dados.filter(projeto => projeto.destaque);
    area.innerHTML = "";
    indicadores.innerHTML = "";

    destaques.forEach((projeto, indice) => {
        area.innerHTML += `
            <div class="carousel-item ${indice === 0 ? "active" : ""}">
                <div class="slide-destaque" style="background-image: linear-gradient(90deg, rgba(35, 5, 10, .92), rgba(35, 5, 10, .25)), url('${projeto.imagem}')">
                    <div class="slide-texto">
                        <span class="etiqueta">Projeto em destaque</span>
                        <h1>${projeto.titulo}</h1>
                        <p>${projeto.descricao}</p>
                        <a class="btn btn-light fw-semibold" href="detalhes.html?id=${projeto.id}">Ver detalhes &rarr;</a>
                    </div>
                </div>
            </div>
        `;
        indicadores.innerHTML += `
            <button type="button" data-bs-target="#carrosselDestaques" data-bs-slide-to="${indice}"
                class="${indice === 0 ? "active" : ""}" ${indice === 0 ? 'aria-current="true"' : ""}
                aria-label="Ir para o destaque ${indice + 1}"></button>
        `;
    });
}

// Exibe todos os projetos em cards na página inicial.
function carregarProjetos() {
    const lista = document.getElementById("lista-projetos");
    if (!lista) return;

    lista.innerHTML = "";
    dados.forEach(projeto => {
        lista.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4">
                <article class="card-projeto h-100">
                    <img src="${projeto.imagem}" class="card-img-top" alt="Imagem relacionada ao projeto: ${projeto.titulo}">
                    <div class="card-body d-flex flex-column">
                        <span class="categoria">${projeto.categoria}</span>
                        <h3 class="card-title">${projeto.titulo}</h3>
                        <p class="card-text">${projeto.descricao}</p>
                        <a class="btn btn-devhub mt-auto" href="detalhes.html?id=${projeto.id}">Ver detalhes</a>
                    </div>
                </article>
            </div>
        `;
    });
}

// Busca o projeto pelo ID informado na URL e monta sua página de detalhes.
function carregarDetalhes() {
    const area = document.getElementById("detalhes");
    if (!area) return;

    const parametros = new URLSearchParams(window.location.search);
    const id = Number(parametros.get("id"));
    const projeto = dados.find(item => item.id === id);

    if (!projeto) {
        area.innerHTML = `
            <div class="alert alert-warning">
                <h2 class="h4">Projeto não encontrado</h2>
                <p class="mb-2">Verifique o endereço ou volte para a página inicial.</p>
                <a class="btn btn-devhub" href="index.html">Voltar aos projetos</a>
            </div>
        `;
        return;
    }

    const tecnologias = projeto.tecnologias.map(item => `<span class="badge-tecnologia">${item}</span>`).join("");
    const recursos = projeto.recursos.map(item => `<li>${item}</li>`).join("");
    const fotos = projeto.fotos.map(foto => `
        <div class="col-12 col-md-6 col-lg-4">
            <figure class="foto-galeria h-100">
                <img src="${foto.imagem}" alt="${foto.titulo}">
                <figcaption>${foto.titulo}</figcaption>
            </figure>
        </div>
    `).join("");

    area.innerHTML = `
        <article class="detalhe-projeto">
            <div class="row g-4 align-items-center">
                <div class="col-12 col-lg-5">
                    <img class="imagem-principal" src="${projeto.imagem}" alt="Imagem relacionada ao projeto: ${projeto.titulo}">
                </div>
                <div class="col-12 col-lg-7">
                    <span class="categoria">${projeto.categoria}</span>
                    <h1>${projeto.titulo}</h1>
                    <p class="lead">${projeto.descricao}</p>
                    <ul class="lista-informacoes">
                        <li><strong>Autor:</strong> ${projeto.autor}</li>
                        <li><strong>Data de cadastro:</strong> ${formatarData(projeto.data)}</li>
                        <li><strong>Público-alvo:</strong> ${projeto.publico}</li>
                        <li><strong>Objetivo:</strong> ${projeto.objetivo}</li>
                        <li><strong>Tecnologias:</strong> ${tecnologias}</li>
                    </ul>
                </div>
            </div>

            <hr>
            <section class="secao-detalhe">
                <h2>Sobre o projeto</h2>
                <p>${projeto.conteudo}</p>
            </section>

            <section class="secao-detalhe">
                <h2>Principais recursos propostos</h2>
                <ul class="lista-recursos">${recursos}</ul>
            </section>

            ${projeto.repositorio ? `
            <section class="secao-detalhe">
                <a class="btn btn-devhub" href="${projeto.repositorio}" target="_blank" rel="noopener noreferrer">Acessar repositório no GitHub</a>
            </section>` : ""}

            <section class="secao-detalhe">
                <h2>Galeria de imagens</h2>
                <p class="texto-auxiliar">Confira abaixo imagens relacionadas à interface e à apresentação do projeto.</p>
                <div class="row g-3">${fotos}</div>
            </section>
        </article>
    `;
}

carregarCarrossel();
carregarProjetos();
carregarDetalhes();
