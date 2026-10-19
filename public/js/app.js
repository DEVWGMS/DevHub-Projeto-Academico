
const dados = [
    {
        id: 1,
        titulo: "Sistema de Controle de Estoque",
        descricao: "Sistema para organizar produtos e quantidades.",
        conteudo: "O projeto permite cadastrar produtos, acompanhar as quantidades disponíveis e organizar as informações do estoque de maneira simples e eficiente.",
        categoria: "Sistemas",
        autor: "Wallace Gabriel",
        data: "2026-10-18",
        imagem: "imagens/projeto1.png"
    },
    {
        id: 2,
        titulo: "Portfólio de Desenvolvedor",
        descricao: "Página para apresentar projetos e habilidades.",
        conteudo: "O portfólio apresenta informações profissionais, habilidades técnicas, tecnologias utilizadas e projetos desenvolvidos pelo programador.",
        categoria: "Desenvolvimento Web",
        autor: "Wallace Gabriel",
        data: "2026-10-18",
        imagem: "imagens/projeto2.png"
    },
    {
        id: 3,
        titulo: "Catálogo de Produtos",
        descricao: "Catálogo interativo com pesquisa e categorias.",
        conteudo: "O catálogo permite visualizar produtos, consultar suas descrições e organizar os resultados por categoria. A proposta é facilitar a navegação e a localização dos produtos.",
        categoria: "Desenvolvimento Web",
        autor: "Wallace Gabriel",
        data: "2026-10-18",
        imagem: "imagens/projeto3.png"
    }
];

const listaProjetos = document.getElementById("lista-projetos");

if (listaProjetos) {
    listaProjetos.innerHTML = "";

    dados.forEach(projeto => {
        listaProjetos.innerHTML += `
            <article class="card-projeto">
                <img
                    src="${projeto.imagem}"
                    alt="${projeto.titulo}"
                    onerror="this.style.display='none'"
                >

                <div class="card-conteudo">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <p><strong>Categoria:</strong> ${projeto.categoria}</p>

                    <a class="botao" href="detalhes.html?id=${projeto.id}">
                        Ver detalhes
                    </a>
                </div>
            </article>
        `;
    });
}

const areaDetalhes = document.getElementById("detalhes");

if (areaDetalhes) {
    const parametros = new URLSearchParams(window.location.search);
    const id = Number(parametros.get("id"));

    const projeto = dados.find(item => item.id === id);

    if (projeto) {
        areaDetalhes.innerHTML = `
            <article class="detalhe-projeto">
                <img
                    src="${projeto.imagem}"
                    alt="${projeto.titulo}"
                    onerror="this.style.display='none'"
                >

                <h2>${projeto.titulo}</h2>

                <p>${projeto.descricao}</p>
                <p>${projeto.conteudo}</p>
                <p><strong>Categoria:</strong> ${projeto.categoria}</p>
                <p><strong>Autor:</strong> ${projeto.autor}</p>
                <p><strong>Data:</strong> ${projeto.data}</p>

                <a class="botao" href="index.html">
                    Voltar para os projetos
                </a>
            </article>
        `;
    } else {
        areaDetalhes.innerHTML = `
            <p>Projeto não encontrado.</p>
            <a class="botao" href="index.html">
                Voltar para a página inicial
            </a>
        `;
    }
}
