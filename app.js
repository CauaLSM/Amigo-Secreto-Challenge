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
}

