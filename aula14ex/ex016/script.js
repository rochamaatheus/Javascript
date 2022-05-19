function contar() {
    let inicio = document.querySelector('input#txti').value
    let fim = document.querySelector('input#txtf').value
    let passo = document.querySelector('input#txtp').value
    let res = document.querySelector('div#res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem Crescente
            for (let c = i; c <= f; c+= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem Regressiva
            for (let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}