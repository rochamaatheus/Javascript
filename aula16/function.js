function mult(n1=0, n2=0) {
    let nu1 = Number(n1)
    let nu2 = Number(n2)
    let res = nu1*nu2
    return res
}

function raiz(n=0) {
    let nu1 = Number(n)
    let res = Math.sqrt(nu1)
    return res
}

function parimp(n=0) {
    let nu1 = Number(n)
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

function fatorial(n) {
    let n1 = Number(n)
    let fat = 1
    for(let c = n1; c > 1; c--) {
        fat *= c
    }
    return fat
}

//RECURSIVIDADE//
function fatorialS(n) {
    var n1 = Number(n)
    let fat = 1
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(`Multiplicação: ${mult(2, 15)}`)
console.log(`Raiz: ${raiz(9)}`)
console.log(`Par ou Impar: ${parimp(3)}`)
console.log(`Fatorial: ${fatorial(5)}`)
console.log(`FatorialS: ${fatorialS(5)}`)