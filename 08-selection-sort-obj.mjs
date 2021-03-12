let trocas = 0, pass = 0, comps = 0

function selectionSort(vetor, fnComp) {
    function encontrarMenor(inicio) {
        let menor = inicio
        for(let j = inicio + 1; j < vetor.length; j++) { //esse loop vai até a ultima posição
            //if(vetor[j] < vetor[menor]) menor = j
            if(fnComp(vetor[menor], vetor[j])) menor = j
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

//função de comparação retorna true caso o primeiro objeto seja maior que o segundo
