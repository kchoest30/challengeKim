// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaNumerosSorteados = [];
function agregarAmigo() {
    if (document.getElementById("amigo").value == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        let amigoNuevo = document.getElementById("amigo").value;
        amigos.push(amigoNuevo);
        console.log(amigoNuevo);
        document.getElementById("listaAmigos").innerHTML = "";
        for (let i=0; i < amigos.length; i++) {
            document.getElementById("listaAmigos").innerHTML += `<ul>${amigos[i]}</ul>`;
        };
        document.getElementById("amigo").value = '';
    };
}


function sortearAmigo(){
    if (amigos.length == 0) {
        alert("La lista esta vacia, incluye los participantes!")
    } else {
        for (y = 0; y < amigos.length; y++) {
            if (listaNumerosSorteados.length < totalItems){
                numeroSorteado = Math.floor(Math.random()*totalItems);
                if (numeroSorteado == y || listaNumerosSorteados.includes(numeroSorteado)) {
                    console.log(numeroSorteado + "Reintentar sorteo");
                    return sortearAmigos(y);
                } else {
                    listaNumerosSorteados.push(numeroSorteado);
                }
            }
        }
        for (let i=0; i < amigos.length; i++){
            document.getElementById("resultado").innerHTML += `<ul>${amigos[i]} regala a ${listaNumerosSorteados[i]}</ul>`;
        }
    }

}
