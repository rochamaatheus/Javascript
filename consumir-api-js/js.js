function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
}

function criarLinha(cep) {
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    let td = document.createElement('td')

    th.innerHTML = partes
    td.innerHTML = usuarios[partes]

    tr.appendChild(th)
    tr.appendChild(td)
    table.appendChild(tr)
}


let data = fazGet('https://api.postmon.com.br/v1/cep/89230654')
let usuarios = JSON.parse(data)
var table = document.querySelector('#tabela')

console.log(usuarios)

for(var partes in usuarios) {
    criarLinha(partes)
}