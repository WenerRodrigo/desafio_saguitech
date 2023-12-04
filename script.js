function calcularNotaFiscal() {

    var valorServico = parseFloat(document.getElementById('valor').value);
    var taxaImposto = parseFloat(document.getElementById('imposto').value);


    var imposto = (valorServico * taxaImposto) / 100;


    var total = valorServico + imposto;


    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Valor do Serviço: R$ ${valorServico.toFixed(2)}</p>
        <p>Imposto (${taxaImposto}%): R$ ${imposto.toFixed(2)}</p>
        <p>Total: R$ ${total.toFixed(2)}</p>
    `;
}
