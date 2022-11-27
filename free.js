let sum = 0
let cards = []
let gotBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.querySelector(".message-el")
let sumEL = document.querySelector("#sum-el")
let cardEL = document.querySelector(".card-el")
console.log(cards)

function startgame(){
    isAlive = true
    let firstCard = getrandomcard()
    let secondCard = getrandomcard()
    cards = [firstCard,secondCard]

    sum = firstCard + secondCard
    rendergame()



}

function getrandomcard(){
    let z= Math.floor(Math.random() * 13) + 1  

    if (z === 1 ){
        return 11
    }
    else if (z> 10){
        return 10
    }
    else {
        return z
    }
}

function rendergame(){
    sumEL.textContent = "Sum:" + sum
    if (sum <= 20 ){
    message = "Do you wanna draw a new card?"
    isAlive = true

}
else if (sum === 21){
    message = "you got BlackJack! ✌"
    gotBlackJack = true
    isAlive = false
}
else {
    message = "you are out of game 😭"
    isAlive = false

}
messageEL.innerText =message

cardEL.textContent = "Cards" 
for(let i=0; i<cards.length; i++){
    cardEL.textContent += cards[i] +" "
}
}
function newcard(){
    if (isAlive === true && gotBlackJack===false){
    let card = getrandomcard()
    sum += card
    cards.push(card)

    rendergame()

    }



}
let player = {
    name: "Boby",
    money: 160
}
let playerEL = document.querySelector("#play-el").innerText = player.name + ": $"+ player.money