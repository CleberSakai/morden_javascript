// Operador lógico que retorna o seu operando do lado direito, caso seu lado esquerdo seja null ou undefined
// Caso contrario, e o esquerdo nao for null nem undefined ele retorna o valor do lado esquerdo mesmo

let a = 0

let b = a || 42

console.log({ a, b })


b = a ?? 42

console.log({ a, b })

let c = false ?? 42 

console.log({c})