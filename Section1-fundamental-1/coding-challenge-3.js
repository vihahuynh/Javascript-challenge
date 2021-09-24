const dolphinsScore1 = 98
const dolphinsScore2 = 100
const dolphinsScore3 = 50

const koalasScore1 = 98
const koalasScore2 = 100
const koalasScore3 = 100

const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3)/3
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) /3

console.log(`Dolphins score; ${dolphinsAverageScore}`)
console.log(`Koalas score; ${koalasAverageScore}`)

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100){
  console.log('Dolphins win!!!')
}else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100){
    console.log('Koalas win!!!')
}else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100){
  console.log('Both win the trophy.')
}else{
  console.log('No team wins the trophy.')
}