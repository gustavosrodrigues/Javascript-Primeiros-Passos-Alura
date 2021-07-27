console.log("------------------------------Trabalhando com Loops---------------------------------")

function alugarJogo(pessoa, lista) {
    const pesquisa = pesquisarJogo(pessoa, lista);
    const podeAlugar = pessoa.idade >= idadeMinima || pessoa.estaAcompanhada;
    if (pesquisa) {        
         if (podeAlugar) {
            // Pessoa é maior de idade
            const indexJogo = lista.indexOf(pesquisa);
            pessoa.itemAlugado = lista.splice(indexJogo, 1);
            console.log(`${pessoa.nome} alugou ${pessoa.itemAlugado}
    Catálogo atualizado: ${lista}`);
        } else {
            // Pessoa é menor de idade e desacompanhada
            console.log(`${pessoa.nome} não é maior de idade e está desacompanhada.`);
        }
    } else {
        console.log(`Infelizmente não pudemos encontrar ${pessoa.jogoDesejado} no nosso catálogo.`)
    }    
}

function devolverJogo(pessoa, lista) {
    if (pessoa.itemAlugado.length > 0) {
        lista.push(pessoa.itemAlugado);        
        console.log(`Devolução de ${pessoa.itemAlugado} confirmada, ${pessoa.nome}!`)
        pessoa.itemAlugado = [];
        exibirCatalogo(lista);
    } else {
        console.log(`${pessoa.nome}, você não precisa devolver nada!`)
    }    
}

function exibirCatalogo(lista) {
    console.log(`Catálogo de jogos: ${lista} \n`)
}

function pesquisarJogo(pessoa, lista) {
    let contador = 0;
    const jogo = pessoa.jogoDesejado;    
    while(contador < lista.length) {        
        if (jogo == lista[contador]) {
            return jogo;            
        }
        contador += 1; 
    }
}

function quebralinha() {
    console.log("\n");
}

const listaDeJogos = [
    "Metal Gear",
    "Metroid",
    "Castlevania"
];

const pessoa1 = {
    nome: "Rogério",
    idade: 20,
    estaAcompanhada: false,
    jogoDesejado: "Castlevania",
    itemAlugado: []
}

const pessoa2 = {
    nome: "Catarina",
    idade: 17,
    estaAcompanhada: false,
    jogoDesejado: "MegaMan",
    itemAlugado: []
}

const idadeMinima = 18;

listaDeJogos.push("MegaMan");

//Execução Principal

alugarJogo(pessoa1, listaDeJogos);
alugarJogo(pessoa2, listaDeJogos);

devolverJogo(pessoa1, listaDeJogos);
devolverJogo(pessoa2, listaDeJogos);

/* pesquisarJogo(pessoa1, listaDeJogos);
pesquisarJogo(pessoa2, listaDeJogos); */