document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("produtoForm"); //const cria uma variavel imutavel, form é o formulario com os campos de produto e quantidade
    const resultado = document.getElementById("resultado"); // resultado é o paragrafo onde vamos mostrar o valor total calculado

    const precos = {    //Criamos um objeto (dicionario em python) atribuindo um valor as "options" no HTML
        ferro: 50.00,
        aco: 70.00,
        ah: 999.99,
        areia: 20.00
    }

    let estoque = {
        ferro: 80,
        aco: 90,
        ah: 999,
        areia:200
    }

    botao.addEventListener("click", function() {   //Aqui o script espera o clique do butão para executar a função

        const produtoSelecionado = document.getElementById("escPro").value;     // pegamos a escolha de feito no formulario 
        const quantidade = parseInt(document.getElementById("quantidade").value);   //o mesmo é feito com a quantidade, mas usamos parseInt o transforma em um numero

        if (quantidade <= 0) {  //verificamos se a quantidade é valida
            resultado.textContent = "Por favor, insira uma quantidade válida.";
            return; //caso seja invalida, paramos a execução com return
        }

        if (quantidade > estoque[produtoSelecionado]) {
            resultado.textContent = "Estoque insuficiente para realizar a operação";
            return;
        }

        const precoUnitario = precos[produtoSelecionado]; //pegamos o preço do produto usando o nome do produto como chave para o objeto preços
        const total = precoUnitario * quantidade; //por fim, calculamos o resultado;

        resultado.textContent = `Total a pagar: R$ ${total.toFixed(2)}`; //por fim, mostramos o resultado com duas casa decimais com ToFixed(2)
    });
});