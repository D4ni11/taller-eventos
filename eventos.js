document.getElementById("miBoton").addEventListener("click", function(event) {
    event.stopPropagation(); // Evita que el evento suba al div
    alert("Hola!");
});

document.getElementById("contenedor").addEventListener("click", function() {
    alert("Hola! Soy el div");
});
