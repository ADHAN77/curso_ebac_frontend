document.getElementById("enviar").addEventListener("click", validarFormulario);

function validarFormulario() {
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if (campoB > campoA) {
    document.getElementById("mensagem").innerHTML = "Formulário válido!";
    } else {
    document.getElementById("mensagem").innerHTML = "Formulário inválido!";
    }
}