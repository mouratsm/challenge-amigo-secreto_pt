//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo(){
    const nomeDoAmigo = document.getElementById("amigo");
    const nome = nomeDoAmigo.value.trim();

    if (nome == ""){
        alert("Favor informar um nome");
        return;
    }

    amigos.push(nome);
    console.log(amigos);

    nomeDoAmigo.value = "";
    exibirAmigos();
}