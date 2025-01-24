
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

function exibirAmigos(){
    const lista = document.querySelector("#listaAmigos"); 
    lista.innerHTML = "";
    console.log("Lista limpa")

    for (let i = 0; i < amigos.length; i++){
        const li = document.createElement("li")
        li.textContent = amigos[i]
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    if (amigos.length < 2 || amigos.length === 0) { 
        alert("Não há amigos para sortear. Favor adicione os nomes.");
        return;
    } 
 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.querySelector("#resultado");
    
    resultado.innerHTML = `Seu amigo secreto é: <strong>${amigoSorteado}</strong>`;
}