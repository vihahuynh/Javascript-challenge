//Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
//Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const dolphinsScore1 = 85
const dolphinsScore2 = 54
const dolphinsScore3 = 41

const koalasScore1 = 23
const koalasScore2 = 34
const koalasScore3 = 27

const calcAverage = function(score1, score2, score3){
    return (score1 + score2 + score3) / 3
}

const dolphinsAverageScore = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3)
const koalasAverageScore = calcAverage(koalasScore1, koalasScore2, koalasScore3)


const checkWinner = function(dolphinsAverageScore, koalasAverageScore) {
    if (dolphinsAverageScore >= koalasAverageScore * 2){
        console.log('Dolphin win the trophy!')
    }else if (koalasAverageScore >= dolphinsAverageScore * 2){
        console.log('Koalas win the trophy')
    }else{
        console.log('No team wins the trophy :(')
    }
}

checkWinner(dolphinsAverageScore, koalasAverageScore)