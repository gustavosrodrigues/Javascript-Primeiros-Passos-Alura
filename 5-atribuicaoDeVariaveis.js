console.log("Trabalhandocom atribuição de variáveis");

const idade = 29;
//const nome = "Gustavo";
const primeiroNome = "Gustavo"; //Seja específico com o nome das variáveis
const sobrenome = "Rodrigues";

console.log(primeiroNome, sobrenome); // váriaveis entre um separador ","
console.log(primeiroNome + " " + sobrenome); // variáveis concatenadas com uma string vazia 

// !Importante
// expressão que une string e variáveis sem concatenar ou usando ","
// Usa-se crase "´ ´"  ao redor de toda a expressão e use Cifrão "$" e chaves "{}" para chamar uma variável
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

//nome = nome + sobrenome; //como a variável 'nome' é do tipo constante, se torna impossível a sua redefinição

const nomeCompleto = primeiroNome + sobrenome; //'nomeCompleto' é uma variável do tipo 'let', o que permite ser redefinida
console.log(nomeCompleto);

let contador = 0;
//contador = contador + 1;
contador += 1;
console.log(contador);
