let trocas = 0, pass = 0, comps = 0

function selectionSort(vetor) {
    function encontrarMenor(inicio) {
        let menor = inicio
        for(let j = inicio + 1; j < vetor.length; j++) { //esse loop vai até a ultima posição
            if(vetor[j] < vetor[menor]) menor = j
            comps++
        }
        return menor
    }
    for(let i = 0; i <= vetor.length - 2; i++) { // percurso do vetor até a penultima posição
        pass++
        let menor = encontrarMenor(i + 1) 
        if(vetor[menor] < vetor[i]){
            [vetor[menor], vetor[i]] = [vetor[i], vetor[menor]]
            trocas++
        }       
        comps++
    }
}

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
selectionSort(nums)
console.log(nums) 
console.log({trocas, pass, comps})

import {nomes} from './includes/100-mil-nomes.mjs'

console.time('Ordenando nomes...')
selectionSort(nomes)
console.timeEnd('Ordenando nomes...')
console.log('Depois:', nomes)
console.log({trocas, pass, comps})