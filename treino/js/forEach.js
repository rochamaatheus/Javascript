const socialNetworks = ['Youtube', 'Twitter', 'Instagram', 'Facebook']

socialNetworks.forEach((socialNetwork, index, array) => {
    console.log(index, socialNetwork, array)
})

console.log('-----------------------------------------------------------')

const logArrayInfo = (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array)
}

socialNetworks.forEach(logArrayInfo)