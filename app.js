//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    nome = document.getElementById('amigo').value
    if(nome == ''){
        alert('Por favor, digite um nome')
    } else{
        amigos.push(nome);
        document.getElementById('amigo').value = '';
    }
    console.log(amigos);
    mostrarAmigos();
}

function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        let itemLista = document.createElement('li');
        itemLista.innerHTML = amigos[i];
        listaAmigos.appendChild(itemLista);
    }
}

function sortearAmigo(){
    if(amigos.length < 2){
        alert('Adicione mais amigos para sortear');
    } else{
        let indiceAmigoSorteado = Math.floor(parseInt(Math.random() * amigos.length));
        let amigoSorteado = amigos[indiceAmigoSorteado];
        let elementoResultado = document.getElementById('resultado');
        elementoResultado.innerHTML = amigoSorteado;
    }
}

