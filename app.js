const mensajeEntrada = document.getElementById(`mensaje`)

const btnEncriptar = document.getElementById(`encryptBtn`)

const btnDesencriptar = document.getElementById(`decryptBtn`)

const resultado = document.getElementById(`resultado`)

const boxSinTexto = document.getElementById(`boxSinTexto`)

const copiar = document.getElementById(`Copiar`)

let message="";


btnEncriptar.addEventListener('click', function() {
    message=mensajeEntrada.value
        let encryptedMessage = message
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
            console.log("Esto es mensaje", encryptedMessage)
            boxSinTexto.style.display="none"
            resultado.style.display="block"
            copiar.style.display="block"
            resultado.value = encryptedMessage
        //return encryptedMessage;
    });
    

btnDesencriptar.addEventListener('click', function() {
    message=mensajeEntrada.value
        let decryptedMessage = message
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
            boxSinTexto.style.display="none"
            resultado.style.display="block"
            copiar.style.display="block"
            resultado.value = decryptedMessage
        return decryptedMessage;  
    });

copiar.addEventListener(`click`, function() {
    navigator.clipboard.writeText(resultado.value)
})