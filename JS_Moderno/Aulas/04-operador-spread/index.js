const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns // Aqui não estou criando um novo array, apenas se referindo ao existente

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log(towns, townsCopy)

townsClone = [...towns] // Aqui sim estou criando um novo array

townsClone.push('Aldebaran')

console.log(towns, townsCopy, townsClone)

const townsObj = {...towns}
const townsObjClone = {...townsObj}

townsObjClone.test = 'Testando'

console.log(townsObj, townsObjClone)