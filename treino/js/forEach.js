console.log('ForEach')

const socialNetworks = ['Youtube', 'Twitter', 'Instagram', 'Facebook']

socialNetworks.forEach((socialNetwork, index, array) => {
    console.log(index, socialNetwork, array)
})

console.log('-----------------------------------------------------------')

console.log('ForEach com CONST')

const logArrayInfo = (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array)
}

socialNetworks.forEach(logArrayInfo)

console.log('-----------------------------------------------------------')

console.log('ForIn')