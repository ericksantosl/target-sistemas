function isFibonacciNumber(number) {
    let a = 0;
    let b = 1;

    while (a <= number) {
        if (a === number) {
            return true;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }

    return false;
}

function verificarPertencimento(numero) {
    if (isFibonacciNumber(numero)) {
        return `${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `${numero} não pertence à sequência de Fibonacci.`;
    }
}

// Exemplo de uso:
const numeroInformado = 55;
console.log(verificarPertencimento(numeroInformado));
