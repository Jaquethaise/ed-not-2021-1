function buscaSequencial(vetor, valorBusca){
    for(let i = 0; i < vetor.length; i++){
        if(fnComp(vetor[i], valorBusca)) return i // retorna a posição onde foi encontrado
    }
    return -1  // valor de busca não encontrado
}
//function comparaNome(objNome, valorBusca){
  //  return objNome.first_name === valorBusca
// 

const compararNome = (objNome, valorBusca) => objNome.first_name === valorBusca

import { objNomes } from './includes/vetor-obj-objNomes.mjs'

console.log(buscaSequencial(objNomes, 'JAQUELINE', compararNome))