# calculoDaRankeada

/**
 * Calcula o nível de um herói com base no saldo de vitórias.
 * @param {number} wins - Quantidade de vitórias.
 * @param {number} losses - Quantidade de derrotas.
 * @returns {object} Objeto contendo saldo e nível do herói.
 */
function calculateRank(wins, losses) {
    if (typeof wins !== "number" || typeof losses !== "number") {
        throw new Error("Wins and losses must be numbers.");
    }

    const balance = wins - losses;
    let level;

    if (balance <= 10) {
        level = "Iron";
    } else if (balance <= 20) {
        level = "Bronze";
    } else if (balance <= 50) {
        level = "Silver";
    } else if (balance <= 80) {
        level = "Gold";
    } else if (balance <= 90) {
        level = "Diamond";
    } else if (balance <= 100) {
        level = "Legendary";
    } else {
        level = "Immortal";
    }

    return { balance, level };
}

// Example usage
const hero = calculateRank(30, 5);
console.log(`The hero has a balance of ${hero.balance} and is ranked ${hero.level}.`);

module.exports = calculateRank;
