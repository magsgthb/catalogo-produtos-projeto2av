function exibirProdutos(lista) {
    const container = $("#produtosContainer");
    container.empty();

    if (lista.length === 0) {
        container.html("<p class='mensagem-erro'>Nenhum produto encontrado.</p>");
        return;
    }

    lista.forEach(prod => {
        const card = `
            <div class="card">
                <img src="${prod.imagem}" alt="${prod.nome}">
                <h3>${prod.nome}</h3>
                <p><strong>Categoria:</strong> ${prod.categoria}</p>
                <p><strong>Preço:</strong> R$ ${prod.preco.toFixed(2)}</p>
                <button class="btn-detalhes" data-id="${prod.id}">Ver Detalhes</button>
            </div>
        `;
        container.append(card);
    });
}

function preencherCategorias() {
    const select = $("#filtroCategoria");
    const categorias = [...new Set(produtosLista.map(p => p.categoria))];

    categorias.forEach(cat => {
        select.append(`<option value="${cat}">${cat}</option>`);
    });
}

function filtrarCategoria() {
    const categoria = $("#filtroCategoria").val();

    if (categoria === "todas") return produtosLista;

    return produtosLista.filter(p => p.categoria === categoria);
}


function buscarProdutos(lista) {
    const texto = $("#buscarInput").val().toLowerCase();
    return lista.filter(p => p.nome.toLowerCase().includes(texto));
}

function ordenarProdutos(lista) {
    const tipo = $("#ordenarSelect").val();

    if (tipo === "nome") {
        return lista.sort((a, b) => a.nome.localeCompare(b.nome));
    }

    if (tipo === "precoMenor") {
        return lista.sort((a, b) => a.preco - b.preco);
    }

    if (tipo === "precoMaior") {
        return lista.sort((a, b) => b.preco - a.preco);
    }

    return lista;
}

function atualizarExibicao() {
    let lista = filtrarCategoria();
    lista = buscarProdutos(lista);
    lista = ordenarProdutos(lista);
    exibirProdutos(lista);
}

function abrirModal(id) {
    const prod = produtosLista.find(p => p.id == id);

    if (!prod) return;

    $("#modalImg").attr("src", prod.imagem);
    $("#modalNome").text(prod.nome);
    $("#modalCategoria").text("Categoria: " + prod.categoria);
    $("#modalDescricao").text("Descrição: " + prod.descricao);
    $("#modalPreco").text("Preço: R$ " + prod.preco.toFixed(2));
    $("#modalEstoque").text("Estoque: " + prod.estoque);

    $("#modal").fadeIn();
}

function fecharModal() {
    $("#modal").fadeOut();
}

$(document).ready(function () {

    // Botão Carregar Produtos
    $("#btnCarregar").click(function () {
        carregarProdutos(function (ok) {
            if (ok) {
                preencherCategorias();
                atualizarExibicao();
            }
        });
    });

    // Buscar enquanto digita
    $("#buscarInput").on("keyup", atualizarExibicao);

    // Filtrar categoria
    $("#filtroCategoria").on("change", atualizarExibicao);

    // Ordenar
    $("#ordenarSelect").on("change", atualizarExibicao);

    // Abrir modal
    $(document).on("click", ".btn-detalhes", function () {
        abrirModal($(this).data("id"));
    });

    // Fechar modal
    $("#closeModal").click(fecharModal);
    $("#modal").click(function (e) {
        if (e.target.id === "modal") fecharModal();
    });
});