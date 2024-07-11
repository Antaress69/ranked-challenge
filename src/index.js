
function calculateElo(win, lose){
    let winRate = win - lose
    let elo;

    if (win < 10) {
        elo = 'Ferro';
    } else if (win >= 11 && win <= 20) {
        elo = 'Bronze';
    } else if (win >= 21 && win <= 50) {
        elo = 'Prata';
    } else if (win >= 51 && win <= 80) {
        elo = 'Ouro';
    } else if (win >= 81 && win <= 90) {
        elo = 'Diamante';
    } else if (win >= 91 && win <= 100) {
        elo = 'Lendário';
    } else if (win >= 101) {
        elo = 'Imortal';
    }
    return {winRate, elo};
}

win = 44;
lose = 7;
result = calculateElo(win, lose);
console.log(`O Herói tem de saldo de ${result.winRate} está no nível de ${result.elo}`);