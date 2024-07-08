document.getElementById('encryptBtn').addEventListener('click', function() {
    let mensaje = document.getElementById('mensaje').value;
    if (mensaje) {
        let encryptedMensaje = btoa(mensaje);
        alert('Mensaje encriptado: ' + encryptedMensaje);
    } else {
        alert('Por favor, ingrese un mensaje para encriptar.');
    }
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    let mensaje = document.getElementById('mensaje').value;
    if (mensaje) {
        try {
            let decryptedMensaje = atob(mensaje);
            alert('Mensaje desencriptado: ' + decryptedMensaje);
        } catch (e) {
            alert('El mensaje ingresado no es válido para desencriptar.');
        }
    } else {
        alert('Por favor, ingrese un mensaje para desencriptar.');
    }
});
