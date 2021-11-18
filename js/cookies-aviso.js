
botonCookies = document.getElementById("btn-aceptar-cookies");
avisoCookies = document.getElementById("cookies-aviso");

// dataLayer = [];

if(!localStorage.getItem("cookies-aceptadas")) {
    avisoCookies.classList.add("activo");
} 
/*
else {
    dataLayer.push({
        'event': 'cookies-aceptadas'
    });
}
*/


botonCookies.addEventListener("click", () => {
    // eliminar el banner
    avisoCookies.classList.remove("activo");
    // guardar en localStorage
    localStorage.setItem("cookies-aceptadas", true);

    // Insertar la cookie personalizada
    /*
    dataLayer.push({
        'event': 'cookies-aceptadas'
    });
    */

});
