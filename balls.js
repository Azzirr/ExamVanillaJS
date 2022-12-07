const balls = [
    {
        weight: 1,
        index: 0
    },
    {
        weight: 1,
        index: 1
    },
    {
        weight: 2,
        index: 2
    },
    {
        weight: 1,
        index: 3
    },
    {
        weight: 1,
        index: 4
    },
    {
        weight: 1,
        index: 5
    },
    {
        weight: 1,
        index: 6
    },
    {
        weight: 1,
        index: 7
    },
]
function letsWeightThemUp(){
    function randomNoRepeats(array) {
        var copy = array.slice(0);
        return function() {
          if (copy.length < 1) { copy = array.slice(0); }
          var index = Math.floor(Math.random() * copy.length);
          var item = copy[index];
          copy.splice(index, 1);
          return item;
        };
      }
      const chooser = randomNoRepeats(balls);
      const ball1 = chooser();
      const ball2 = chooser();
      const ball3 = chooser();
      const ball4 = chooser();
      const ball5 = chooser();
      const ball6 = chooser();
      const ball7 = chooser();
      const ball8 = chooser();
      console.log(ball1)
      console.log(ball2)
      console.log(ball3)
      console.log(ball4)
      console.log(ball5)
      console.log(ball6)
      console.log(ball7)
      console.log(ball8)

      if((ball1.weight + ball2.weight + ball3.weight) === (ball4.weight + ball5.weight + ball6.weight)){
        if(ball7.weight > ball8.weight){
            console.log('Index of the heviest ball is ' + ball7.index)
        } else {
            console.log('Index of the heviest ball is ' + ball8.index)
        }
    } else if((ball1.weight + ball2.weight + ball3.weight) > (ball4.weight + ball5.weight + ball6.weight)){
        if(ball1.weight > ball2.weight){
            console.log('Index of the heviest ball is ' + ball1.index)
        } else if(ball1.weight < ball2.weight){
            console.log('Index of the heviest ball is ' + ball2.index)
        } else {
            console.log('Index of the heviest ball is ' + ball3.index)
        }
    } else if((ball1.weight + ball2.weight + ball3.weight) < (ball4.weight + ball5.weight + ball6.weight)){
        if(ball4.weight > ball5.weight){
            console.log('Index of the heviest ball is ' + ball4.index)
        } else if (ball4.weight < ball5.weight){
            console.log('Index of the heviest ball is ' + ball5.index)
        } else {
            console.log('Index of the heviest ball is ' + ball6.index)
        }
    }


}
letsWeightThemUp()



// function letsWeightThemUp(){
//     const bagA = balls.splice(0, 3);
//     const bagB = balls.splice(0, 3);
//     const bagC = balls;
//     let sumA = 0;
//     let sumB = 0;
//     let sumC = 0;
//     function sumUp(element){
//         const result = element.reduce((accumulator, value) => {
//             return parseInt(accumulator + value);
//         }, element)
//         return result
//     }
//     sumA = sumUp(bagA)
//     sumB = sumUp(bagB)
//     sumC = sumUp(bagC)
//     if(sumA === sumB){
//         let x = bagC.shift();
//         let y = bagC;
//         if(x > y){
//             console.log(x);
//         } else {
//             console.log(y)
//         }
//     }
// }
// letsWeightThemUp()



