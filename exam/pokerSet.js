// Create deck
let suits = ['spade', 'heart', 'diamond', 'club'];
let ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


    let deck = []; 
    
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            deck.push({Rank: ranks[j], Suit: suits[i]});
        }
    }

// Shuffle cards
    for (let i = deck.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * i);       
        let temp = deck[i];
        deck[i] = deck[rand];
        deck[rand] = temp;
    }
    
for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Rank} of ${deck[i].Suit}`)
}

console.log(deck)