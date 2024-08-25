//Decclaramos como constantes nuestros botones del html para mayor rapidez y fluidez
const mensajeEntrada = document.getElementById('mensaje');
const btnEncriptar = document.getElementById('encryptBtn');
const btnDesencriptar = document.getElementById('decryptBtn');
const resultado = document.getElementById('resultado');
const boxSinTexto = document.getElementById('boxSinTexto');
const copiar = document.getElementById('Copiar');

let message = "";


//Realizamos el proceso de encriptacion
btnEncriptar.addEventListener('click', function () {
    message = mensajeEntrada.value;
    let encryptedMessage = message
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    //Bloqueamos las imagenes y el texto que salen en el recuadro donde se mira el resultado

    boxSinTexto.style.display = "none";
    resultado.style.display = "block";
    copiar.style.display = "block";
    resultado.value = encryptedMessage;

    // Limpiar el contenido del textarea de entrada
    mensajeEntrada.value = '';
});

//Realizamos el proceso de desencriptacion
btnDesencriptar.addEventListener('click', function () {
    message = mensajeEntrada.value;
    let decryptedMessage = message
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    boxSinTexto.style.display = "none";
    resultado.style.display = "block";
    copiar.style.display = "block";
    resultado.value = decryptedMessage;

    // Limpiar el contenido del textarea de entrada
    mensajeEntrada.value = '';
});


//Creamos el boton con la funcion de copiar
copiar.addEventListener('click', function () {
    navigator.clipboard.writeText(resultado.value);
});
