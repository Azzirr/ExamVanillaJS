const pokerData = require('./poker.json')
let hand = [];
function bestDeck(){
    // hand shuffle cards
    for(let i = 0; i < 5; i++){
        hand.push(pokerData[Math.floor(Math.random() * pokerData.length)])
    }
    // TO DO! ELIMINATE DUPLICATES!
    // hand sort
    hand = hand.sort((a, b) => a.rank > b.rank ? 1 : -1)
    console.log(hand)
    // create 2 arrays - with suities and ranks
    let suitArray = [];
    for(let i = 0; i < hand.length; i++){
        suitArray.push(hand[i].suit)
    }
    let rankArray = [];
    for(let i = 0; i < hand.length; i++){
        rankArray.push(hand[i].rank)
    }
    // function that counts how many suits you have in deck
    let suitCount = {};
    suitArray.forEach((element) => {
        suitCount[element] = (suitCount[element] || 0) + 1
    })
    // function that counts how many card types you have in deck
    let rankCount = {};
    rankArray.forEach((element) => {
        rankCount[element] = (rankCount[element] || 0) + 1
    })

    console.log(suitArray, rankArray);
    console.log(suitCount, rankCount);

    function isFlush() {
        if (Object.keys(suitCount).find(key => suitCount[key] === 5)) {
          return true;
        } else {
          return false;
        }
    }
    console.log(isFlush());
}
bestDeck()
