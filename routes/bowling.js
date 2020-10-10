const app = require("express").Router();


function bowlingScore(rolls){

let translation = []
for(let i = 0; i < rolls.length; i++){
 if(rolls[i] === "X" || rolls[i] === "x") translation.push([10, 0])
 else if(rolls[i+1] === '/')  translation.push([Number(rolls[i]), false])
 else if(rolls[i+1] === '-') translation.push([Number(rolls[i]), null])
 else if(Number(rolls[i]) > 0 && Number(rolls[i]) < 10 && i === rolls.length-1) translation.push([Number(rolls[i]), null])
 else if(Number(rolls[i]) > 0 && Number(rolls[i]) < 10 && Number(rolls[i+1]) > 0 && Number(rolls[i+1]) < 10 ) translation.push([Number(rolls[i]), Number(rolls[i+1])])
}

let score = []
for(let j = 0; j < 10; j++){
  let sum = 0
  if(translation[j][1] === 0 || translation[j][1] === false){
    sum = 10
    translation[j+1] ? sum = sum + translation[j+1][0] + Number(translation[j+1][1]): null
    translation[j+2] && translation[j][1] === 0 ? sum = sum + translation[j+2][0] + Number(translation[j+2][1]): null
    score.push(sum)

  }
  else {
    sum = translation[j][0] + translation[j][1] 
    score.push(sum)

  }
}
return score.reduce((a,b)=> a + b)

}

app.post("/", (req, res, next) => {
    const {score} = req.query

    try {

        res.json(bowlingScore(score))
        
    } catch (error) {
      console.error(error.message);
    }
  });

module.exports = app