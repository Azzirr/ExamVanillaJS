const pokerData = require('./poker.json')
let hand = [];

function bestDeck(){
    // hand shuffle cards
    for(let i = 0; i < 5; i++){
        hand.push(pokerData[Math.floor(Math.random() * pokerData.length)])
    }
    // // TO DO! ELIMINATE DUPLICATES!
    // // hand sort
    hand = hand.sort((a, b) => a.value > b.value ? 1 : -1)
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
    // checking is my deck flush
    function isFlush(){
        if(Object.keys(suitCount).find(element => suitCount[element] === 5)){
            return true;
        } else {
            return false;
        }
    }
    //console.log(isFlush());
    // returning how many pairs i have, in example: 0, 1 or 2
    function isPair(){
        return Object.keys(rankCount).filter(element => rankCount[element] === 2).length
    }
    //console.log(isPair())

    function isStraight(){
        let cards = rankArray.slice(0).join('')
        //console.log(cards)
        if(cards === "10JQKA"){
            return 'ROYAL FLUSH'
        } else if(cards === '2345A' || cards === '23456' || cards === '34567' || cards === '45678' || cards === '56789' || cards === '678910' || cards === '78910J' || cards === ' 8910JQ' || cards === ' 910JQK'){
            return 'STRAIGHT'
        } else {
            return false;
        }
    }
    isStraight();

    function isThreeOfAKind(){
        return Object.keys(rankCount).filter(element => rankCount[element] === 3).length
    }
    //console.log(isThreeOfAKind())

    function isFourOfAKind(){
        return Object.keys(rankCount).filter(element => rankCount[element] === 4).length
    }

    function deckResolver(){
        if(isStraight() === 'ROYAL FLUSH' && isFlush() === true){
            console.log('You got Royal Flush!')
        } else if(isStraight() === 'STRAIGHT' && isFlush() === true){
            console.log('You got Straight Flush!')
        } else if(isFourOfAKind() === 1){
            console.log('You got Four of a kind!')
        } else if(isPair() === 1 && isThreeOfAKind() === 1){
            console.log('You got Full house!')
        } else if(isFlush() === true){
            console.log('You got Flush!')
        } else if(isStraight() === 'STRAIGHT'){
            console.log('You got Straight!')
        } else if(isThreeOfAKind() === 1){
            console.log('You got Three of a kind!')
        } else if(isPair() === 2){
            console.log('You got Two pairs!')
        } else if(isPair() === 1){
            console.log('You got One pair!')
        } else {
            console.log('You got High card, ' + hand[4].rank + '!') 
        }
    }
    return deckResolver()

}
bestDeck()
