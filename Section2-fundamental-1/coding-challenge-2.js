const weightMark = 78
const heightMark = 1.69

const weightJohn = 92
const heightJohn = 1.95

const bmiMark = weightMark / (heightMark * heightMark)
const bmiJohn = weightJohn / (heightJohn * heightJohn)

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark.toFixed(1)}) is higher than John's BMI (${bmiJohn.toFixed(1)})`)
}
