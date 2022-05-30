let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou!')
        this.peso += p
    },
    exercício(p=0){
        console.log(`Perdeu ${p}Kg!`)
        this.peso -= p
        console.log(`Agora ${amigo.nome} pesa ${this.peso}Kg`)
    }
}
amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
amigo.exercício(15)