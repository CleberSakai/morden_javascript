const average = (...numbers) => {
    const sum = numbers.reduce((accum, numbers) => accum + numbers, 0)
    return sum / numbers.length
}

console.log(average(10,20,20,30))
 
const weightedAverage = (...entries) => {
  const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
  const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
  return sum / weightSum
}

console.log(`Média Ponderada: ${weightedAverage(
  { number: 9, weight: 3 },
  { number: 7 },
  { number: 10, weight: 1 },
)}`)

const median = (...numbers) => {
    const orderedNumberns = [...numbers].sort((a, b) => a - b) // ordenando os numeros em sequencia
    const middle = Math.floor(orderedNumberns.length / 2) // pegando exatamente a metade do array

    if(orderedNumberns.length % 2 !== 0) {
        return orderedNumberns[middle]
    }
    
    const firstMedian = orderedNumberns[middle-1] // pega o meio -1 
    const secondMedian = orderedNumberns[middle] // pega o elemento do meio
    return average(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

const mode = (...numbers) => {
    // [ [n, qtd], [n, qtd] ]
    const qnt = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length // usando o formato n => num === n / retorno diretamente, sem precisar do return
    ])

    qnt.sort((a, b) => b[1] - a[1])
    return qnt[0][0]
}

console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)
