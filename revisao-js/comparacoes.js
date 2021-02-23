//Numeros
let a = 10, b = 8, c = 10
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('---------------------')

//strings ordem alfabética - tabela ASCI
a = 'CATIFUNDA'
b = 'FELISBINO'
c = 'CATIFUNDA'

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)
 
console.log('------------------------------------')

//Booleanos false = 0  e true = 1 nas regras booleanas
a = true
b = false
c = true

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('-----------------------------')

//Vetores - endereço de memória, são endereços de memorias diferentes, o vetor a está no lugar mais alto // comparações diretas de vetores
// são resultados inconsistentes, não é possivel comparar diretamente dois vetores

a = [10, 20, 30, 40, 50]
b = [-3, -2, -1]
c = [10, 20, 30, 40, 50]

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)


console.log('-----------------------------')

// Objetos // Objetos também não poder ser diretamente comparados entre si
a = { marca: 'Fiat', modelo: '147', ano: 1979}
b = { marca: 'Chevrolet', modelo: 'Chevette', ano: 1982}
c = { marca: 'Fiat', modelo: '147', ano: 1979}

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('-----------------------------')
//CONCLUSÃO: APENAS OS SEGUINTES TIPOS DE DADOS SÃO DIRETAMENTE COMPARAVEIS ENTRE SI:
// - NUMBER
// - STRING
// - BOOLEAN