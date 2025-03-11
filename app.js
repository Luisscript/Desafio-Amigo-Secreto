let listaAmigos = [];

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML =texto;
}

exibirTextoNaTela("h1", "Bem vindo ao Jogo do Amigo Secreto");

function limparCampo(id){
    campo = document.getElementById(id);
    campo.value = "";
}

function adicionarAmigo(){
    let nome = document.querySelector("input").value;
    let campoTexto = document.querySelector("input");

    if(nome==""){
        alert("Entrada inválida. Campo do nome vazio!");
    }

    else{
        listaAmigos.push(nome);
        console.log(listaAmigos);
        limparCampo("amigo");
        atualizandoLista();
        campoTexto.focus()
    }
}

function atualizandoLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""

    for(let i = 0; i < listaAmigos.length; i++){
        let item = document.createElement("li");
        item.textContent = listaAmigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if(listaAmigos==0){
        exibirTextoNaTela("h2", "Lista vazia, não há amigos para sortear");
        setTimeout(()=>{exibirTextoNaTela("h2", "Digite o nome dos seus amigos")}, 2000);
    }

    else{
        let indiceAmigoSorteado = Math.floor(Math.random()*listaAmigos.length);
        let resultado = document.getElementById("resultado")
        amigoSorteado = listaAmigos[indiceAmigoSorteado]
        resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML="";
        listaAmigos = [];
        setTimeout(()=>{resultado.innerHTML=""}, 10000);
    }
}

document.addEventListener("keypress", function(e) {
    if(e.key === "Enter"){
        let btn = document.querySelector("button");
        btn.click();
    }
});