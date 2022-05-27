valores = [92, 12, 42, 3, 54, 23, 26, 76]

let total = valores.length
let maior = valores[0]
let menor = valores[0]
let soma = 0
let media = 0
for(pos in valores) {
    soma += valores[pos]
    if (valores[pos] > maior){
        maior = valores[pos]
    }
    if (valores[pos] < menor) {
        menor = valores[pos]
    }
}
media = soma / total

console.log('Total ' + total)
console.log('Maior ' + maior)
console.log('Menor ' + menor)
console.log('Soma ' + soma)
console.log('Média ' + media)