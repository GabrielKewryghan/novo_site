document.addEventListener("DOMContentLoaded", function () {
    const botaoAdicEst = document.getElementById("adicionarEstBTN"); //Cria uma variavel guardando o botão de adicionar estoque
    const botao = document.getElementById("confirmarBTN"); //const cria uma variavel imutavel, form é o formulario com os campos de produto e quantidade
    const resultadoCompra = document.getElementById("resultadoCompra"); // resultado é o paragrafo onde vamos mostrar o valor total calculado
    const resultadoEstoque = document.getElementById("resultadoEstoque");

    const precos = {    //Criamos um objeto (dicionario em python) atribuindo um valor as "options" no HTML
        Ferro: 50.00,
        Aço: 70.00,
        Arame: 59.90,
        Areia: 20.00
    }

    let estoque = {
        Ferro: 80,
        Aço: 90,
        Arame: 60,
        Areia:200
    }

    function atualizarEstoque() {
        const secaoEstoque = document.getElementById("estoque");
        secaoEstoque.innerHTML = "<h2>Estoque Atual:</h2>";
        for (let item in estoque) {
            secaoEstoque.innerHTML += `<p>${item}: ${estoque[item]}</p>`;
        }
    }

    botao.addEventListener("click", function() {   //Aqui o script espera o clique do butão para executar a função

        const produtoSelecionado = document.getElementById("escProCom").value;     // pegamos a escolha de feito no formulario 
        const quantidade = parseInt(document.getElementById("quantidadeCom").value);   //o mesmo é feito com a quantidade, mas usamos parseInt o transforma em um numero

        if (isNaN(quantidade) || quantidade <= 0) {  //verificamos se a quantidade é valida
            resultadoCompra.textContent = "Por favor, insira uma quantidade válida.";
            return; //caso seja invalida, paramos a execução com return
        }

        if (quantidade > estoque[produtoSelecionado]) {
            resultadoCompra.textContent = "Estoque insuficiente para realizar a operação";
            return;
        }

        const precoUnitario = precos[produtoSelecionado]; //pegamos o preço do produto usando o nome do produto como chave para o objeto preços
        const total = precoUnitario * quantidade; //por fim, calculamos o resultado;
        estoque [produtoSelecionado]-= quantidade;
        resultadoCompra.textContent = `Total a pagar: R$ ${total.toFixed(2)}`; //por fim, mostramos o resultado com duas casa decimais com ToFixed(2)
        atualizarEstoque();
    });

    botaoAdicEst.addEventListener("click", function() {

        const produtoSelecionado = document.getElementById("escProEst").value;     // pegamos a escolha de feito no formulario 
        const quantidade = parseInt(document.getElementById("quantidadeEst").value);   //o mesmo é feito com a quantidade, mas usamos parseInt o transforma em um numero

        if (quantidade <= 0) {  //verificamos se a quantidade é valida
            resultadoEstoque.textContent = "Por favor, insira uma quantidade válida.";
            return; //caso seja invalida, paramos a execução com return
        }

        estoque[produtoSelecionado] += quantidade;
        resultadoEstoque.textContent = `${quantidade} unidades de ${produtoSelecionado} adicionadas ao estoque. Estoque atual: ${estoque[produtoSelecionado]}`;
        atualizarEstoque();
    });

    atualizarEstoque();

});