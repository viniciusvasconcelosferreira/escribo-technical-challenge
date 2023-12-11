# Desafio Técnico 1: Somatório de Números Divisíveis por 3 ou 5

## Descrição

Este desafio consiste em implementar uma função em JavaScript que receba um número inteiro positivo e retorne o
somatório de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

## Objetivo

O objetivo deste desafio é avaliar a capacidade do candidato para a vaga de Desenvolvedor Backend na empresa "Escribo
Inovação para o Aprendizado". A partir dele será medido a habilidade do candidato em criar soluções eficientes para
problemas
lógicos, bem como sua competência na implementação de funções em JavaScript.

## Tecnologias Utilizadas

- JavaScript
- Node.js

## Exemplos

- Caso a função receba o inteiro 10, ela deve retornar 23, resultante do somatório dos números 3, 5, 6 e 9 que são
  menores que 10.

```javascript
const resultado = somatorio35(10);
console.log(resultado); // Saída esperada: 23
```

- Caso a função receba o inteiro 11, ela deve retornar 33, resultante do somatório dos números 3, 5, 6, 9 e 10 que são
  menores que 11.

```javascript
const resultado = somatorio35(11);
console.log(resultado); // Saída esperada: 33
```

## Pré-requisitos

Antes de iniciar, certifique-se de ter o [Node.js](https://nodejs.org/en) instalado em seu sistema.

## Como Rodar o Projeto

1. Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/viniciusvasconcelosferreira/escribo-technical-challenge.git
```

2. Navegue para o diretório do projeto:

```bash
cd escribo-technical-challenge
```

3. Execute a função JavaScript:

```bash
node main.js
```

4. Siga as instruções exibidas no console para fornecer o número para o qual deseja calcular o somatório.
