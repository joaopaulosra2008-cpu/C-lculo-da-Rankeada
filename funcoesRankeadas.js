function calcular(quantidadeDeVitorias, quantidadeDeDerrotas) {
    let saldo = quantidadeDeVitorias - quantidadeDeDerrotas
    let nivel = ""

    if (saldo <= 10) {
        nivel = "Ferro"

    } else if (saldo <= 20) {
        nivel = "Bronze"

    } else if (saldo <= 50) {
       nivel = "Prata"

    } else if (saldo <= 80) {
      nivel = "Ouro"

    } else if (saldo <= 90) {
      nivel = "Diamante"

    } else if (saldo <= 100) {
        nivel = "Lendário"

    } else {
        nivel = "Imortal"
    }
console.log(`O herói tem de saldo de ${saldo} e está no ${nivel}`)
}

calcular(30,5)