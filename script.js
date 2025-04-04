let valorTitulo = document.getElementById("TituloPrincipal").innerText
console.log(valorTitulo)

//função que altera o conteudo do titulo
function AlterarTitulo(){
    document.getElementById("TituloPrincipal").innerHTML="Titulo alterado com sucesso";
    window.alert("Titulo alterado com sucesso");
}

function desfazerAlteracao(){
    document.getElementById("TituloPrincipal").innerHTML=valorTitulo;
}