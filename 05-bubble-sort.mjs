/* Bubble sort
Percorre o conjunto de dados, comparando o elemento atual com o seu sucessor e promovendo a troca entre eles caso o primeiro seje maior que
o segundo, faz isso em varias passadas, até que, na ultima delas, nenhuma troca tenha sido registrada
====metodo menos eficiente====
*/
let totTrocas, pass, comps
function bubbleSort(vetor) {
    totTrocas = 0, pass = 0, comps = 0
        let trocas
        do {
            trocas = 0
            pass++       // iniciando uma nova passada

            // percurso do vetor, da primeira até a penultima posição//
            for(let i = 0; i <= vetor.length - 2; i++){
                if(vetor[i] > vetor[i + 1]) {
                    // troca versao antiga
                    //let aux = vetor[i]
                    //vetor[i] = vetor[i+i]
                    //vetor[i + i] = aux
                  // ou
                // troca direta js via desestruturação de vetor
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
                
                }
                comps++
            }
            totTrocas += trocas
        } while(trocas > 0)
}

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

console.log('Antes' , nums)
bubbleSort(nums)
console.log('Depois', nums)
console.log({totTrocas, pass, comps})

import {nomes} from './includes/100-mil-nomes.mjs'

console.log('Ante:', nomes)
console.log('Ordenando nomes...')
bubbleSort(nomes)
console.timeEnd('Ordenando nomes...')
console.log('Depois:', nomes)
console.log({totTrocas, pass, comps})