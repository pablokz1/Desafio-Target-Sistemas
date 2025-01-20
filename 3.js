const dados = require('./dados.json');
const faturamentoMensal = dados;

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
