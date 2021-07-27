console.log("------------------------------Trabalhando com condicionais---------------------------------")

function alugarJogo(pessoa, lista) {
    if (pessoa.idade >= idadeMinima || pessoa.estaAcompanhada) {
        // Pessoa é maior de idade
        pessoa.itemAlugado = lista.splice(3, 1);
        console.log(`${pessoa.nome} alugou ${pessoa.itemAlugado}
Catálogo atualizado: ${lista}`);
    } else {
        // Pessoa é menor de idade e desacompanhada
        console.log(`${pessoa.nome} não é maior de idade.`);
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

const listaDeJogos = [
    "Metal Gear",
    "Metroid",
    "Castlevania"
];

const pessoa1 = {
    nome: "Rogério",
    idade: 20,
    estaAcompanhada: false,
    itemAlugado: []
}

const pessoa2 = {
    nome: "Catarina",
    idade: 17,
    estaAcompanhada: true,
    itemAlugado: []
}

//const idadeComprador = 15;
const idadeMinima = 18;
//let itemComprado = [];

listaDeJogos.push("MegaMan");

exibirCatalogo(listaDeJogos);

alugarJogo(pessoa1, listaDeJogos);
devolverJogo(pessoa1, listaDeJogos);
devolverJogo(pessoa1, listaDeJogos);

//devolverJogo(pessoa1, listaDeJogos);

// Código com dois ifs
/* if (pessoa2.idade >= idadeMinima) {
    // Pessoa é maior de idade
    itemComprado = listaDeJogos.splice(1, 1);
    console.log(`${pessoa2.nome} comprou ${itemComprado}
Catálogo atualizado: ${listaDeJogos}`);
} else if (pessoa2.estaAcompanhada) {
    // Pessoa é menor de idade mas acompanhada
    itemComprado = listaDeJogos.splice(1, 1);
    console.log(`${pessoa2.nome} comprou ${itemComprado}
Catálogo atualizado: ${listaDeJogos}`);
} else {
    // Pessoa é menor de idade e desacompanhada
    console.log(`${pessoa2.nome} não é maior de idade.`);
} */
