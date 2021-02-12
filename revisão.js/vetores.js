let frutas = ['maça', 'laranja','pera','uva', 'mamão', 'banana']

// Vetor original
console.log(frutas)

// Vetor alterado
console.log(frutas)
console.log(ultimaFruta)


// Remoção do primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Remoção em posição intermediária

let terceiraFruta = Frutas.splice(2,1) // primeiro parametro é a posição da remoção, no caso o terceiro elemento 2 (pois começa a contar do zero e depois virgula e a quantidade)

console.log(frutas)
console.log(terceiraFruta)