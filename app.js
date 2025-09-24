// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
        
    }
}
function agregarAmigo() {
    let input =document.getElementById("amigo");
    let nombre = input.value.trim();
    if(nombre === "") {
        alert("Por favor, agregar un nombre válido");
        return;
    }
    if (!isNaN(nombre)) {
        alert("El nombre no puede ser solo un número.");
        return;
    }
    if (listaAmigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        return;
    }

    listaAmigos.push(nombre);
    input.value = "";
    mostrarLista();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

