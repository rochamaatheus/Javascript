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
var total = 0

var tpartes = []
var tmodelo = []
var tvalor = []

for (let partes in gamingPc) {
  resin.innerHTML += `${partes.toUpperCase()} = Modelo: ${gamingPc[partes].model} com o valor de ${gamingPc[partes].price.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}<br>`

  gamingPcPrice.push(gamingPc[partes].price)

  tpartes.push(partes.toLocaleUpperCase())
  tmodelo.push(gamingPc[partes].model)
  tvalor.push(gamingPc[partes].price)
}

gamingPcPrice.forEach(element => {
  total += element
});

reseach.innerHTML = `O preço total do PC é de ${total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

//Tabela//

function criar() {
  var btn = document.querySelector('#btn')
  var res = document.querySelector('div#res')
  if (btn.value == 'Criar Tabela') {
    var table = document.createElement('table')
  
    //CAPTION DA TABELA//
    var caption = document.createElement('caption')
    caption.innerHTML = 'Gaming PC Partes'
  
    //CABEÇALHO DA TABELA//
    var thead = document.createElement('thead')
    var trh = document.createElement('tr')
    var th1 = document.createElement('th')
    var th2 = document.createElement('th')
    var th3 = document.createElement('th')
    th1.innerHTML = 'Parte'
    th2.innerHTML = 'Modelo'
    th3.innerHTML = 'Preço'
    trh.appendChild(th1)
    trh.appendChild(th2)
    trh.appendChild(th3)
    thead.appendChild(trh)
  
    //CORPO DA TABELA//
    //É PRECISO 6 TR (Table Row) e 18 TD (Table Data)//
    var tbody = document.createElement('tbody')
    //PRIMEIRA LINHA//
    var trb1 = document.createElement('tr')
    var td1_trb1 = document.createElement('td')
    td1_trb1.innerHTML = tpartes[0]
    var td2_trb1 = document.createElement('td')
    td2_trb1.innerHTML = tmodelo[0]
    var td3_trb1 = document.createElement('td')
    td3_trb1.innerHTML = tvalor[0].toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
  
    trb1.appendChild(td1_trb1)
    trb1.appendChild(td2_trb1)
    trb1.appendChild(td3_trb1)
  
    tbody.appendChild(trb1)
  
    //SEGUNDA LINHA//
    var trb2 = document.createElement('tr')
    var td1_trb2 = document.createElement('td')
    td1_trb2.innerHTML = tpartes[1]
    var td2_trb2 = document.createElement('td')
    td2_trb2.innerHTML = tmodelo[1]
    var td3_trb2 = document.createElement('td')
    td3_trb2.innerHTML = tvalor[1].toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
  
    trb2.appendChild(td1_trb2)
    trb2.appendChild(td2_trb2)
    trb2.appendChild(td3_trb2)
  
    tbody.appendChild(trb2)
  
    //TERCEIRA LINHA//
    var trb3 = document.createElement('tr')
    var td1_trb3 = document.createElement('td')
    td1_trb3.innerHTML = tpartes[2]
    var td2_trb3 = document.createElement('td')
    td2_trb3.innerHTML = tmodelo[2]
    var td3_trb3 = document.createElement('td')
    td3_trb3.innerHTML = tvalor[2].toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
  
    trb3.appendChild(td1_trb3)
    trb3.appendChild(td2_trb3)
    trb3.appendChild(td3_trb3)
  
    tbody.appendChild(trb3)
  
    //QUARTA LINHA//
    var trb4 = document.createElement('tr')
    var td1_trb4 = document.createElement('td')
    td1_trb4.innerHTML = tpartes[3]
    var td2_trb4 = document.createElement('td')
    td2_trb4.innerHTML = tmodelo[3]
    var td3_trb4= document.createElement('td')
    td3_trb4.innerHTML = tvalor[3].toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
  
    trb4.appendChild(td1_trb4)
    trb4.appendChild(td2_trb4)
    trb4.appendChild(td3_trb4)
  
    tbody.appendChild(trb4)
  
    //QUINTA LINHA//
    var trb5 = document.createElement('tr')
    var td1_trb5 = document.createElement('td')
    td1_trb5.innerHTML = tpartes[4]
    var td2_trb5 = document.createElement('td')
    td2_trb5.innerHTML = tmodelo[4]
    var td3_trb5 = document.createElement('td')
    td3_trb5.innerHTML = tvalor[4].toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
  
    trb5.appendChild(td1_trb5)
    trb5.appendChild(td2_trb5)
    trb5.appendChild(td3_trb5)
  
    tbody.appendChild(trb5)
  
    //SEXTA LINHA//
    var trb6 = document.createElement('tr')
    var td1_trb6 = document.createElement('td')
    td1_trb6.innerHTML = tpartes[5]
    var td2_trb6 = document.createElement('td')
    td2_trb6.innerHTML = tmodelo[5]
    var td3_trb6 = document.createElement('td')
    td3_trb6.innerHTML = tvalor[5].toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
  
    trb6.appendChild(td1_trb6)
    trb6.appendChild(td2_trb6)
    trb6.appendChild(td3_trb6)
  
    tbody.appendChild(trb6)
  
    //RODAPÉ DA TABELA//
    var tfoot = document.createElement('tfoot')
    var thf = document.createElement('th')
    thf.setAttribute('colspan', '2')
    thf.innerHTML = 'Preço total das peças'
    var tdf = document.createElement('td')
    tdf.innerHTML = total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
  
    tfoot.appendChild(thf)
    tfoot.appendChild(tdf)
  
    //TABELA//
    table.appendChild(caption)
    table.appendChild(thead)
    table.appendChild(tbody)
    table.appendChild(tfoot)
    res.appendChild(table)
    res.innerHTML += `<p>Esta tabela foi feita inteiramente em Javascript</p>`

    btn.value = 'Exluir Tabela'
  } else {
    res.innerHTML = ''
    btn.value = 'Criar Tabela'
  }
}