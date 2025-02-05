function calc(event) {
    event.preventDefault(); // Evita que a página recarregue

    // Pegando os valores dos inputs e convertendo para número
    const bs = Number(document.getElementById("bs").value);
    const as = Number(document.getElementById("as").value);
    const money = Number(document.getElementById("money").value);

    // Verificando se os valores são válidos
    if (as <= bs || money <= 0) {
        document.getElementById("result").innerHTML = "<h3>Os valores inseridos são inválidos!</h3>";
        return;
    }

    const balance = as - bs;
    const cps = money / balance;

    // Exibindo o resultado corretamente com template strings
    document.getElementById("result").innerHTML = `
        <h1>Seu CPS é R$${cps.toFixed(2)}</h1>
        <h2>O saldo de seguidores é ${balance}</h2>
    `;
}

// Adicionando o evento ao botão para prevenir o reload do formulário
document.querySelector(".form-cps").addEventListener("submit", calc);
