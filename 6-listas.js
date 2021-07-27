console.log("Trabalhando com listas");

const metalGear = 'Metal Gear';
const metroid = 'Metroid';
const castlevania = 'Castlevania';
console.log(metalGear, metroid, castlevania); // Exibindo na tela as variáveis, mas seria melhor com listas?

const listaDeJogos = new Array( //inicializando uma lista
    metalGear, // separe itens da lista com ","
    metroid, 
    castlevania
);

console.log(`Meus jogos favoritos: ${listaDeJogos}`); // Exemplo de uso de Template Strings (Crase)
listaDeJogos.push("MegaMan"); // "Push" adiciona um item ao final de uma lista
console.log(`Meus jogos favoritos: ${listaDeJogos}`);

// !Importante
// A função splice pode remover, adicionar ou substituir itens em locais específicos da lista
// splice(valorInicial, quntElementos, elementoNovo)

listaDeJogos.splice(3,1); // removendo um item da lista no index 3
console.log(`Removendo um item na lista: ${listaDeJogos}`);

listaDeJogos.splice(1,0, "Street Fighter"); // adicionando um item na lista no index 1
console.log(`Adicionando um item na lista: ${listaDeJogos}`);

listaDeJogos.splice(1,1, "Street Fighter 2"); // substitui um item da lista no index 1
console.log(`Substituindo um item na lista: ${listaDeJogos}`);
