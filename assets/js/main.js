
/* javascript */
const quizAnswer =  ["a", 'b', 'a', 'b', 'b', 'a', 'b', 'a', 'b']
const userAnswer = []

document.getElementById("button-0-a").addEventListener("click", function(){
   userAnswer.push("a")
  if (userAnswer[0]===quizAnswer[0]) {
    document.getElementById("button-0-a").style.backgroundColor="Green"
  } else{
    document.getElementById("button-0-a").style.backgroundColor="Red"
  }

});
document.getElementById("button-0-b").addEventListener("click", function(){
   userAnswer.push("b")
  if (userAnswer[0]===quizAnswer[0]) {
    document.getElementById("button-0-b").style.backgroundColor="green"
  } else{
    document.getElementById("button-0-b").style.backgroundColor="red"
  }

});


document.getElementById("button-1-a").addEventListener("click", function(){
   userAnswer.push("a")
  if (userAnswer[1]===quizAnswer[1]) {
    document.getElementById("button-1-a").style.backgroundColor="Green"
  } else{
    document.getElementById("button-1-a").style.backgroundColor="Red"
  }

});
document.getElementById("button-1-b").addEventListener("click", function(){
   userAnswer.push("b")
  if (userAnswer[1]===quizAnswer[1]) {
    document.getElementById("button-1-b").style.backgroundColor="green"
  } else{
    document.getElementById("button-1-b").style.backgroundColor="red"
  }

});
