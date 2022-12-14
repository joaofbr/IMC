let click = document.querySelector('#iCalcula')
click.addEventListener('click', calcular)

function calcular() {
    let userNome = document.querySelector('#iNome').value
    let userAltura = document.querySelector('#iAltura').value
    let userPeso = document.querySelector('#iPeso').value
    let usuario = {
        nome: userNome,
        imc: calculaImc(userAltura, userPeso).toFixed(2),
        situacao: situacaoImc(userAltura, userPeso)
    }
    let alerta = document.querySelector('#iAlert')
    if ((userNome == "") || (userAltura == "") || (userPeso == "")) {
        alert('Preencha os campos vazios.')
    } else {
        alerta.innerHTML = "<h3>olá <span>" + usuario.nome + "</span> seu imc é <span>" + usuario.imc + "</span> e você está <span>" + usuario.situacao + "</span></h3>"
    }
}
function calculaImc(altura, peso) {
    let alturaM = altura / 100
    let imc = parseFloat(peso / (Math.pow(alturaM, 2)))
    return imc
}

function situacaoImc(altura, peso) {
    let imc = calculaImc(altura, peso)
    if (imc < 18.5) {
        imc = 'ABAIXO DO PESO'
    } else if ((imc >= 18.5) && (imc < 25)) {
        imc = 'NO PESO IDEAL'
    } else if ((imc >= 25) && (imc < 30)) {
        imc = 'ACIMA DO PESO'
    } else if ((imc >= 30) && (imc < 35)) {
        imc = 'COM OBESIDADE GRAU I'
    } else if ((imc >= 35) && (imc < 40)) {
        imc = 'COM OBESIDADE GRAU II'
    } else if (imc >= 40) {
        imc = 'COM OBESIDADE GRAU III'
    }
    return imc
}