Projeto:
Catálogo de Produtos — Supermercado

Projeto simples e funcional para exibir produtos de um supermercado utilizando HTML, CSS, JavaScript, jQuery e AJAX.
Os produtos são carregados dinamicamente a partir de um arquivo JSON.

Tecnologias Utilizadas:

HTML5 — Estrutura da aplicação
CSS3 + Responsividade — Estilo visual e responsividade
JavaScript (ES6) — Lógica da aplicação
jQuery — Manipulação do DOM e requisições AJAX
JSON — Base de dados dos produtos

Funcionalidades:

Carregar produtos via AJAX:
O botão "Carregar Produtos" busca os itens no arquivo JSON e exibe no catálogo.

Busca em tempo real:
Enquanto o usuário digita, os produtos são filtrados instantaneamente por nome.
Filtro por categoria:
As categorias são lidas dinamicamente do JSON e aplicam um filtro imediato.

Ordenação:
O usuário pode ordenar os produtos por:
Nome (A → Z)
Preço (menor → maior)
Preço (maior → menor)

Exibição em cards:
Cada produto aparece em um card com imagem, preço, nome e botão de detalhes.

Modal de detalhes:
Ao clicar em "Ver Detalhes", um modal exibe:
Imagem grande
Categoria
Descrição
Preço
Estoque disponível

Layout responsivo.

Como Executar o Projeto (Live Server):

Abra o projeto no VS Code
Instale a extensão Live Server (caso não tenha)
Clique com o botão direito no arquivo index.html
Selecione Open with Live Server

instruções no vs code:

index.html:
Estrutura geral do site
Campos de busca, filtros, ordenação
Modal de detalhes

style.css:
Tema completo com a paleta
Estilo dos cards
Botões e inputs
Modal estilizado

responsive.css:
Ajustes para telas menores
Reorganização de layout para 900px, 600px e 420px

main.js:
Exibição dinâmica dos produtos
Busca
Filtro
Ordenação
Modal de detalhes

produtos.js:
Requisição AJAX
Carregamento da lista de produtos
Tratamento de erros

produtos.json:
Estrutura de dados com todos os produtos disponíveis

Aluno: Matheus Alves Gomes Serrao Matricula: 01801738