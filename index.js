// 1. Criar o array contendo uma string, um número, uma função e um booleano
const meuArray = [
    "Olá Mundo", // String
    42, // Número
    function() { // Função
        console.log("Executando a função dentro do array!");
    },
    true // Booleano
];

// 2. Imprimir "Olá Mundo" (índice 0)
console.log(meuArray[0]);

// 3. Executar a função que está dentro do array (índice 2)
meuArray[2]();

// 4. Imprimir o valor booleano no console (índice 3)
console.log(meuArray[3]);