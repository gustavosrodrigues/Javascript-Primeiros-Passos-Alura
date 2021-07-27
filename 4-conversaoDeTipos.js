console.log("Conversão de tipos");

console.log("ano " + 2022); //Soma entre string e numeros é uma concatenação

console.log("2" + "2"); //Concatenação de duas strings
console.log(parseInt("2") + parseInt("5")); //parseInt transforma uma string em número, caso for possível

console.log("10" / "2"); //A divisão é executada porque o JS reconhece que uma divisão está sendo executada e tenta transformar as strings em números 
console.log("Gustavo" / "2"); //Essa expressão irá retornar NAN (Not A Number), indicando que Gustavo não é, de fato, um número

console.log(6.5); // Números decimais são indicados por "." em JS
console.log(6,5); // A vírgula aqui serve como separador dos valores
