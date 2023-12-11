//importacao dos modulos
const readline = require('readline');

//funcao para calculo do somatorio a partir da verificacao da divisibilidade do numero por 3 ou por 5
function somatorio35(n) {
    let somatorio = 0;
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }
    return somatorio;
}

//criacao da interface para processamento de entrada e saida de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//funcao principal para recebimento e processamento da entrada do usuario
function obterNumeroValido() {
    return new Promise((resolve) => {
        rl.question('Digite um número inteiro positivo: ', (answer) => {
            const inputNumber = parseInt(answer, 10);

            if (isNaN(inputNumber) || inputNumber < 0) {
                console.log('Por favor, digite um número inteiro positivo válido.');
                resolve(obterNumeroValido());
            } else {
                resolve(inputNumber);
            }
        });
    });
}

//funcao de inicializacao
async function iniciar() {
    const numero = await obterNumeroValido();
    const resultado = somatorio35(numero);
    console.log(`O somatório é: ${resultado}`);
    rl.close();
}

//chamada da funcao de inicializacao
iniciar();