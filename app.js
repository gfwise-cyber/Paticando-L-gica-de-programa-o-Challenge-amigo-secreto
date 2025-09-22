
let amigos = [];

function adicionarAmigo() {
    
    const entrada = document.getElementById('nomeAmigo').value.trim();

  
    if (entrada === "") {
        alert("Por favor, insira um nome.");
        return;
    }
   
    amigos.push(entrada);

    
    document.getElementById('nomeAmigo').value = "";

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    
        lista.innerHTML = "";

        for (let amigo of amigos) {
        const elementoLI = document.createElement('li');
        elementoLI.textContent = amigo;
        lista.appendChild(elementoLI);
    }
}

function sortearAmigo() {
       if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sortear.");
        return;
    }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        const amigoSorteado = amigos[indiceAleatorio];

        document.getElementById('resultadoSorteio').textContent = `Amigo sorteado: ${amigoSorteado}`;
}
