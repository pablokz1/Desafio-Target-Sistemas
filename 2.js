function verificaFibonacci(numero) {
    let fibonacci = [0, 1];
    let i = 2;

    while (fibonacci[i - 1] < numero) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        i++;
    }

    if (fibonacci.includes(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
    }
}

const numero = 21;
verificaFibonacci(numero);