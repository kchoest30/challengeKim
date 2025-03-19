// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

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