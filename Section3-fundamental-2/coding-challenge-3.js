const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBmi: function(){
        this.bmi = (this.mass / (this.height ** 2)).toFixed(1)
        return this.bmi
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBmi: function(){
        this.bmi = (this.mass / (this.height ** 2)).toFixed(1)
        return this.bmi
    }
}
if (mark.calcBmi() > john.calcBmi()) {
    console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`)
}else if (mark.bmi < john.bmi){
    console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`)
}else{
    console.log(`They have the same bmi: ${mark.bmi}`)
}