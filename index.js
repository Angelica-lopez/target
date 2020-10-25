var boton = document.querySelector(".js-img");
var contenidoParaOcultar = document.querySelector(".js-card");

function ocultarAparecer(){
    if(contenidoParaOcultar.style.display = "block"){
        contenidoParaOcultar.style.display = "none";
    }if(contenidoParaOcultar.style.display = "none"){
        contenidoParaOcultar.style.display = "block";
    }
}

boton.addEventListener("click", ocultarAparecer);