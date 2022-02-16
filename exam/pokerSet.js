(() => {
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
    for (let i = 0; i < fiveRandomCards.length; i++) {
      newFive.push(fiveRandomCards[i].split(" ").join(""))
}

let rank = [];
let suit = [];

for (let i = 0; i < 5; i++) {
    rank.push(newFive[i].charAt(0));
    suit.push(newFive[i].charAt(1));
}
let sortedRanks = rank.sort()

// Counting the same ranks and values
const countRanks = {};
rank.forEach((x) => {
    countRanks[x] = (countRanks[x] || 0) + 1;
});

const countSuits = {};
suit.forEach((x) => {
    countSuits[x] = (countSuits[x] || 0) + 1;
});

// Function to check poker sets
let isPair = () => {
    return Object.keys(countRanks).filter((key) => countRanks[key] === 2).length;
}
let isThree = () => {
    return Object.keys(countRanks).filter((key) => countRanks[key] === 3).length;
}
let isFourOfAKind = () => {
    return Object.keys(countRanks).filter((key) => countRanks[key] === 4).length;
}
let isFlush = () => {
    return Object.keys(countSuits).filter((suit) => countSuits[suit] === 5).length;
}
let isStraight = () => {
    let index = ranks.indexOf(rank[0])
    let ref = ranks.slice(index, index + 5).join("")
    let section = rank.slice(0).join("")
    if (section === "TJQKA" && section === ref) {
        return "ROYALSTRAIGHT";
    } else if (section === "A2345" || section === ref) {
        return "STRAIGHT";
    } else {
        return "FALSE";
    }
}

//results
let result = () => {
    if (isFlush() === 1 && isStraight() === "ROYALSTRAIGHT") {
        console.log(`You have Royal Flush`)
    } else if(isFlush() === 1 && isStraight() === "STRAIGHT") {
        console.log(`You have straight flush`)
    } else if (isFourOfAKind() === 1) {
        console.log(`Four of a kind of ${Object.keys(countRanks).filter(value => countRanks[value] === 4)}`)
    } else if (isPair() === 1 && isThree() === 1) {
        console.log(`Full house of ${Object.keys(countRanks).filter(value => countRanks[value] === 3)} and ${Object.keys(countRanks).filter(value => countRanks[value] === 2)}`)
    } else if (isFlush() === 1) {
        console.log(`You have flush of ${Object.keys(countSuits).filter(suit => countSuits[suit] === 5)}`)
    } else if (isStraight() === "STRAIGHT") {
        console.log(`You have straight`)
    } else if (isThree() === 1) {
        console.log(`You have three of a Kind of ${Object.keys(countRanks).filter(value => countRanks[value] === 3)}`)
    } else if (isPair() === 2) {
        console.log(`You have two pairs of ${Object.keys(countRanks).filter(value => countRanks[value] === 2)}`)
    } else if (isPair() === 1) {
        console.log(`You have pair of ${Object.keys(countRanks).filter(value => countRanks[value] === 2)}`)
    } else {
        console.log(`Highest cards is ${sortedRanks[sortedRanks.length - 1]}`)
    }
}
result();
})();