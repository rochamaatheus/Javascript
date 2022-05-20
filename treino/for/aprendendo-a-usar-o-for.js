var resin = document.querySelector('div#forin')
var reseach = document.querySelector('div#foreach')

const gamingPc = {
    motherboard: {
      model: 'Asus Prime A320M-K/BR',
      price: 488.9,
    },
    cpu: {
      model: 'Ryzen 5 1600',
      price: 1189.9,
    },
    cabinet: {
      model: 'Aerocool Cylon',
      price: 368.9,
    },
    gpu: {
      model: 'Gigabyte GeForce GTX 1060 3GB GDDR5',
      price: 2537.3,
    },
    power_supply: {
      model: 'EVGA 450W Bronze',
      price: 419.9,
    },
    ram: {
      model: 'HyperX Fury 16GB 2666MHz DDR4',
      price: 750.0,
    },
  };

/*
//Peças do PC
for (let pecas in gamingPc) {
  resin.innerHTML += `${pecas}<br>`
}

//Modelo das Peças
for (let modelos in gamingPc) {
  resin.innerHTML += `${gamingPc[modelos].model}<br>`
}

//Preço das Peças
for (let preços in gamingPc) {
  resin.innerHTML += `${gamingPc[preços].price}<br>`
}
*/

const gamingPcPrice = []
let total = 0

for (let partes in gamingPc) {
  resin.innerHTML += `${partes.toUpperCase()} = Modelo: ${gamingPc[partes].model} com o valor de ${gamingPc[partes].price.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}<br>`

  gamingPcPrice.push(gamingPc[partes].price)
}

gamingPcPrice.forEach(element => {
  total += element
});

reseach.innerHTML = `O preço total do PC é de ${total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`