let cards = []

let sum = 0

let hasBlackjack = false
let isAlive = false

let message = ''

let player = {
    name: "Gabriel",
    chips: 1500
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard()
{
    let randomCard = Math.floor(Math.random() * 13) + 1

    if(randomCard === 1)
    {
        return 11
    }
    else if(randomCard > 10 && randomCard < 14)
    {
        return 10
    }
    else
    {
        return randomCard
    }

}

function startGame()
{
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]

    sum = firstCard + secondCard

    isAlive = true

    renderGame()
}

function renderGame()
{
    document.getElementById("cards").textContent = "Cards: "

    for(let i = 0; i < cards.length; i++)
    {
        document.getElementById("cards").textContent += cards[i] + " "

    }

    document.getElementById("sum").textContent = "Sum: " + sum

    if(sum <= 20)
    {
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21)
    {
        message = "Woohoo! You've got a Blackjack!"
        hasBlackjack = true
    }
    else
    {
        message = "You're out of the game"
        isAlive = false
    }

    document.getElementById("message").textContent = message

}

function newCard()
{
    
    if( isAlive && !hasBlackjack)
    {
        let card = getRandomCard()
        cards.push(card)

        sum += card

        renderGame()
    }

}
