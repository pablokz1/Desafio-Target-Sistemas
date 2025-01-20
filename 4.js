const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentual(faturamento) {
    const valorTotal = Object.values(faturamento).reduce((soma, valor) => soma + valor, 0);

    console.log("Percentual de representação por estado:");
    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / valorTotal) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }
}

calcularPercentual(faturamento);