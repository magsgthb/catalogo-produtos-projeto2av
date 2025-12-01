let produtosLista = []; // Armazena todos os produtos carregados

function carregarProdutos(callback) {

    $.ajax({
        url: "data/produtos.json",
        method: "GET",
        dataType: "json",

        beforeSend: function () {
            $("#mensagemErro").text("Carregando produtos...");
        },

        success: function (resposta) {
            $("#mensagemErro").text("");

            if (resposta.produtos && resposta.produtos.length > 0) {
                produtosLista = resposta.produtos;
                callback(true);
            } else {
                $("#mensagemErro").text("Nenhum produto encontrado no arquivo.");
                callback(false);
            }
        },

        error: function () {
            $("#mensagemErro").text("Erro ao carregar produtos. Verifique o arquivo JSON.");
            callback(false);
        }
    });
}