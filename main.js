function validarForm (){

    let campoA = document.getElementById("campoA").value
    let campoB = document.getElementById("campoB").value

    campoA = parseFloat(campoA)
    campoB = parseFloat(campoB)

    if (campoB > campoA) {
        document.getElementById("mensagem").innerHTML = "formulario valido"
    } else{
        document.getElementById("mensagem").innerHTML = "formulario invalido"
    }

    return false
}