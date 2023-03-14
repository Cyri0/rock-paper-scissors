let playerChoice = document.getElementById('player-choice')
let enemyChoice = document.getElementById('enemy-choice')
let choiceButtons = document.getElementsByClassName('choiceBtn')

let options = []

options.push({'name' : 'Rock', 'emoji': '&#9994;'})
options.push({'name' : 'Paper', 'emoji': '&#9995;'})
options.push({'name' : 'Scissors', 'emoji': '&#9996;'})

let playerHandEmoji = null

for(let i = 0; i< choiceButtons.length; i++){
    choiceButtons[i].onclick = ()=>{
      reset()
      playerHandEmoji = choiceButtons[i].innerHTML
      go()
    }
    choiceButtons[i].innerHTML = options[i].emoji
}

function reset(){
  playerChoice.innerHTML = "&#9994;"
  enemyChoice.innerHTML = "&#9994;"
}

reset()

function go (){
  let mod = -1
  let count = 0
  let goInterval = setInterval(() => {
    enemyChoice.style.transform = 'rotate('+10*mod+'deg)'
    playerChoice.style.transform = 'rotateY(180deg) rotate('+(-90 + 10*mod)+'deg)'
    mod = mod* -1

    count += 1
    if(count == 6){
      clearInterval(goInterval)
      showHands()
    }
  }, 200);
}

function showHands(){
  let enemyChoiceRnd = Math.floor(Math.random()*3)
  enemyChoice.innerHTML = options[enemyChoiceRnd].emoji
  playerChoice.innerHTML = playerHandEmoji
}