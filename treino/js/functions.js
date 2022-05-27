function escreva() {
    console.log('Hello, World!')
}
escreva()
console.log('-----------------------------')
function escrevaMensagem(mensagem) {
    console.log(mensagem)
} 
escrevaMensagem('Esta é uma mensagem')
console.log('-----------------------------')
function soma(a, b) {
    return a + b
}
console.log(soma(10, 5))
console.log('-----------------------------')
function somarArray(n) {
    soma = 0
    for(num of n) {
        soma += num
    }
    return soma
}
console.log(somarArray([5, 5, 5, 10, 10, 5]))
console.log('-----------------------------')
function escreverEndereço(rua, cidade, pais, ...rest) { //Parâmetro rest
    console.log(rua)
    console.log(cidade)
    console.log(pais)

    console.log(rest)

}
escreverEndereço('Rua xxx', 'Joinville', 'Brasil', 'Santa Catarina', 'Casa xpto', 'CEP', 'Bloco 15')
console.log('-----------------------------')
function somaCallback(a, b, fnCallback) {
    return fnCallback(a + b)
}

var multiplicar = function(result) {
    return result * 2
}

console.log(somaCallback(10, 5, multiplicar))