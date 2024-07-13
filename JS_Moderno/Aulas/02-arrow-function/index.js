function normalSum(a, b) {
    return a + b
}

console.log(`Soma normal: ${normalSum(3, 3)}`)

const anonymousSum = function(a, b) {
    return a + b
}

console.log(`Soma anônima: ${anonymousSum(5, 5)}`)

const arrowSum = (a, b) => {
    return a + b
}

console.log(`Soma arrow function: ${arrowSum(30,30)}`)

const subtract = (a,b) => a - b

console.log(`subtração: ${subtract(20, 10)}`)

const double = n => `O dobro de ${n} é ${n * 2}`

console.log(double(30))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === "P")

console.log(startingWithP)