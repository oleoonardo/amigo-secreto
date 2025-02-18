let amigos =[];
function adicionar(){
    let amigo = document.getElementById("nome-amigo").value;

    if(amigo == ""){
        alert("Digite o nome do amigo!");
        return;
    }

    if(amigos.includes(amigo)){
        alert("Amigo já adicionado!");
        return;
    }
    amigos.push(amigo);
    exibirAmigo(amigo);
    limparCampo();

}

function sortear(){
    if(amigos.length < 2){
        alert("Adicione mais amigos para sortear!");
        return;
    }
    let listaAmigos = embaralhar(amigos);
    exibirSorteio(listaAmigos);

}

function reiniciar(){
    amigos = [];
    let listaAmigos = document.getElementById("lista-amigos");
    let listaSorteio = document.getElementById("lista-sorteio");
    listaAmigos.textContent = "";
    listaSorteio.textContent = "";
}

function exibirSorteio(lista){
    let listaSorteio = document.getElementById("lista-sorteio");
    if(listaSorteio.textContent != ""){
        listaSorteio.textContent = "";
    }
    for(let i = 0; i < lista.length; i++){
        if(i == lista.length - 1){
            listaSorteio.innerHTML += `${lista[i]} tirou ${lista[0]} </br>`;
        }else{
            listaSorteio.innerHTML += `${lista[i]} tirou ${lista[i+1]}</br>`;
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
    return lista;
}

function exibirAmigo(amigo){
    let listaAmigos = document.getElementById("lista-amigos");
    if(listaAmigos.textContent == ""){
        listaAmigos.textContent = amigo;
    }else{
        listaAmigos.textContent += `, ${amigo}`;
    }
}

function limparCampo(){
    document.getElementById("nome-amigo").value = "";
}