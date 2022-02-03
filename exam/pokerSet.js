// Create deck
let suits = ['Spade', 'Heart', 'Diamond', 'Club'];
let ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
let createDeck = () => {
    let deck = []; 
    
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
             deck.push(ranks[j] + " " + suits[i]);
        }
    }
    return deck
}

// Shuffle cards
let shuffleCards = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * i);       
        let temp = deck[i];
        deck[i] = deck[rand];
        deck[rand] = temp;
    }
}

let ShuffledDeck = createDeck();
shuffleCards(ShuffledDeck);

// Getting 5 random cards
let fiveRandomCards = ShuffledDeck.splice(0, 5);
console.log(fiveRandomCards);

// Splitting cards into two arrays (ranks and suits)
let newFive = [];
for (let i = 0;i < fiveRandomCards.length;i++) {
    newFive.push(fiveRandomCards[i].split(" ").join(""))
}
 
console.log(newFive);
let rank = [];
let suit = [];

for (let i = 0; i< 5;i++) {
    rank.push(newFive[i].charAt(0));
    suit.push(newFive[i].charAt(1));
}
console.log(rank.sort())
console.log(suit)

// Counting the same ranks and values
const countRanks = {};
rank.forEach((x) => {
    countRanks[x] = (countRanks[x] || 0) + 1;
});
console.log(countRanks)

const countSuits = {};
suit.forEach((x) => {
    countSuits[x] = (countSuits[x] || 0) + 1;
});
console.log(countSuits)
