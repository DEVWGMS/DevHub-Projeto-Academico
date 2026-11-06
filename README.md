# DevHub — Portal de Projetos

## Sobre o projeto
O DevHub é um portal demonstrativo para apresentar projetos de desenvolvimento. A página inicial exibe um carrossel de destaques e cards gerados dinamicamente. Cada projeto possui uma página de detalhes identificada pelo parâmetro `id` na URL, com informações e uma galeria de imagens.

## Autor
- **Nome:** Wallace Gabriel Moreira da Silva
- **Curso:** Bacharelado em Sistemas de Informação

## Tecnologias
- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3

## Funcionalidades
- Carrossel de projetos em destaque com controles anterior/próximo do Bootstrap.
- Cards de projetos gerados a partir de um array de objetos JavaScript.
- Página de detalhes dinâmica com identificação pelo ID da URL.
- Exibição de categoria, autor, data, público-alvo, objetivo, tecnologias e recursos.
- Galeria de imagens com título e descrição.
- Layout responsivo para computadores, tablets e celulares.

## Estrutura
```text
DevHub-Projeto-Academico/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── estoque.png
│   │   ├── portfolio.png
│   │   ├── calculadora.png
│   │   ├── calculadora-mobile.png
│   │   └── ... (imagens e capturas de tela)
│   ├── js/
│   │   └── app.js
│   ├── index.html
│   └── detalhes.html
└── README.md
```

## Como executar
1. Abra a pasta `DevHub-Projeto-Academico` no Visual Studio Code.
2. Abra a pasta `public`.
3. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.
4. Navegue pelo carrossel e clique em **Ver detalhes** nos cards.
5. Para testar diretamente, use `detalhes.html?id=1`, `detalhes.html?id=2` ou `detalhes.html?id=3`.

## Observação sobre as imagens e os dados
As imagens da galeria apresentam materiais visuais relacionados aos projetos. As informações e os recursos descritos respeitam o estágio de desenvolvimento de cada trabalho. Os dados dos projetos ficam no array `dados`, no arquivo `public/js/app.js`.

O terceiro projeto é a **Calculadora Web**, desenvolvida com C# e ASP.NET Core no back-end e HTML, CSS e JavaScript no front-end. O repositório de código está disponível em https://github.com/DEVWGMS/CalculadoraSimples.

## Dependência externa
O Bootstrap 5.3 é carregado pela CDN do jsDelivr. Para carregar os estilos e o carrossel, é necessário acesso à internet durante a execução.
