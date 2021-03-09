let totTrocas, pass, comps
function bubbleSort(vetor, fnComp) {
    totTrocas = 0, pass = 0, comps = 0
        let trocas
        do {
            trocas = 0
            pass++       // iniciando uma nova passada

            // percurso do vetor, da primeira até a penultima posição//
            for(let i = 0; i <= vetor.length - 2; i++){
                if(fnComp(vetor[i], vetor[i +1])){
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

import { candidatos} from './includes/candidatos-2018.mjs'

console.log('antes:', candidatos)
console.time('Ordenando candidatos...')
bubbleSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
console.timeEnd('Ordenando Candidatos...')
console.log('Depois:', candidatos)
console.log({totTrocas, pass, comps})