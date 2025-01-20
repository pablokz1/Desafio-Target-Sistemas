const faturamentoMensal = [
    { "dia": 1, "valor": 221.5 },
    { "dia": 2, "valor": 430.0 },
    { "dia": 3, "valor": 0 },
    { "dia": 4, "valor": 0 },
    { "dia": 5, "valor": 190.0 },
    { "dia": 6, "valor": 0 },
    { "dia": 7, "valor": 340.0 },
    { "dia": 8, "valor": 120.5 },
    { "dia": 9, "valor": 0 },
    { "dia": 10, "valor": 450.0 },
    { "dia": 11, "valor": 300.0 },
    { "dia": 12, "valor": 0 },
    { "dia": 13, "valor": 0 },
    { "dia": 14, "valor": 275.0 },
    { "dia": 15, "valor": 360.0 },
    { "dia": 16, "valor": 410.0 },
    { "dia": 17, "valor": 0 },
    { "dia": 18, "valor": 500.0 },
    { "dia": 19, "valor": 0 },
    { "dia": 20, "valor": 0 },
    { "dia": 21, "valor": 390.0 },
    { "dia": 22, "valor": 200.0 },
    { "dia": 23, "valor": 0 },
    { "dia": 24, "valor": 460.0 },
    { "dia": 25, "valor": 0 },
    { "dia": 26, "valor": 320.0 },
    { "dia": 27, "valor": 0 },
    { "dia": 28, "valor": 250.0 },
    { "dia": 29, "valor": 400.0 },
    { "dia": 30, "valor": 0 }
];

function analisarFaturamento(faturamento) {
    const valoresValidos = faturamento
        .filter(dia => dia.valor > 0)
        .map(dia => dia.valor);

    if (valoresValidos.length === 0) {
        console.log("Não há valores válidos para análise.");
        return;
    }

    const menorValor = Math.min(...valoresValidos);
    const maiorValor = Math.max(...valoresValidos);

    const somaValores = valoresValidos.reduce((soma, valor) => soma + valor, 0);
    const mediaMensal = somaValores / valoresValidos.length;

    const diasAcimaDaMedia = valoresValidos.filter(valor => valor > mediaMensal).length;

    console.log("Menor valor de faturamento:", menorValor.toFixed(2));
    console.log("Maior valor de faturamento:", maiorValor.toFixed(2));
    console.log("Número de dias com faturamento acima da média:", diasAcimaDaMedia);
}

analisarFaturamento(faturamentoMensal);
