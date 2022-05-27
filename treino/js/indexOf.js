//PROCURAR INTEIRO//
var numeros = [12, 14, 15, 64, 234, 53, 52, 54, 7]
console.log(`O número 12 foi encontrado na posição ${numeros.indexOf(12)}`)

//PROCURAR STRING//
var frutas = ['Pera','Laranja', 'Maçã']
console.log(`A fruta Maçã está na posição ${frutas.indexOf('Maçã')}`)

//PROCURAR EM TEXTO//
var texto = 'Este texto está sendo usado para teste. Olha esse teste'
console.log(texto.indexOf('teste', 34))

//PROCURAR COM FILTRO//
var filtro = 'A'
var cores = ['Vermelho', 'Azul', 'Amarelo', 'Verde']
var coresFiltrada = cores.filter((cor) => {
    if(cor.indexOf(filtro) !== -1) {
        return cor
    }
})
console.log(coresFiltrada)