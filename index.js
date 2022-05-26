var valor1 = 0
var valor2 = 0

function somar() {
    document.getElementsByName('resultado')[0].value = Number(valor1) + Number(valor2)
}

function mudarValores() {
    valor1 = document.getElementsByName('valor1')[0].value
    valor2 = document.getElementsByName('valor2')[0].value
}

