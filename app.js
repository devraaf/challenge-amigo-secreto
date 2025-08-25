let nomeAmigo = [];
let lista = document.getElementById('listaAmigos');

function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if(document.getElementById('amigo').value!=0){
        nomeAmigo.push(amigo);
        console.log(nomeAmigo);
    }else{
        alert('Por favor insira um nome.');
    }
    limparCampoDeTexto();
    atualizarListaDeAmigos();
}

function limparCampoDeTexto(){
    amigo = document.getElementById('amigo').value = '';
}

function limparLista(){
    lista.innerHTML  = '';
}

function atualizarListaDeAmigos(){
    lista.innerHTML  = '';
    for(let i = 0; i < nomeAmigo.length; i++){
        let li = document.createElement('li');
        li.textContent = nomeAmigo[i]; 
        lista.appendChild(li);
    }
}

function mostrarResultado(id, texto){
    let resultadoSorteio = document.getElementById('resultado');
    resultadoSorteio.innerHTML = texto;

}

function sortearAmigo(){
    if(nomeAmigo.length >= 2){
        let numeroSorteado = Math.floor((Math.random() * nomeAmigo.length));
        var amigoSorteado = (nomeAmigo[numeroSorteado]);
        console.log(amigoSorteado);
        document.getElementById('sortear').setAttribute('disabled', true);
        limparLista();
        mostrarResultado('resultado',`O amigo secreto sorteado é: ${amigoSorteado}`);
    }else{
        alert('Insira pelo menos 2 nomes.');
    }
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('botaoAdicionar').setAttribute('disabled', true);
}

function reiniciarSorteio(){
    nomeAmigo = [];
    limparLista();
    limparCampoDeTexto();
    atualizarListaDeAmigos();
     document.getElementById('sortear').removeAttribute('disabled');
     document.getElementById('botaoAdicionar').removeAttribute('disabled');
     document.getElementById('resultado').innerHTML = '';
}
    

