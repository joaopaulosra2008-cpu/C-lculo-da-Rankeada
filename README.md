# Calculando o saldo de vitórias e Promovendo de nível do Herói🏆

O principal intuito deste projeto é contabilizar a quantidade de vitórias e a quantidade de derrotas e promovendo o nível do usuário por meio do saldo do cálculo. No final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**".
 
## 💻 Código em JavaScript

```javascript
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
