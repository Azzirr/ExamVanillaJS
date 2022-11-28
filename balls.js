const balls = [1, 1, 1, 1, 1, 1, 1, 2];

function letsWeightThemUp(){
    if((balls[0] + balls[1] + balls[2]) === (balls[3] + balls[4] + balls[5])){
        if(balls[6] > balls[7]){
            console.log('Index of the heviest ball is 6')
        } else {
            console.log('Index of the heviest ball is 7')
        }
    } else if((balls[0] + balls[1] + balls[2]) > (balls[3] + balls[4] + balls[5])){
        if(balls[0] > balls[1]){
            console.log('Index of the heviest ball is 0')
        } else if(balls[0] < balls[1]){
            console.log('Index of the heviest ball is 1')
        } else {
            console.log('Index of the heviest ball is 2')
        }
    } else if((balls[0] + balls[1] + balls[2]) < (balls[3] + balls[4] + balls[5])){
        if(balls[3] > balls[4]){
            console.log('Index of the heviest ball is 3')
        } else if (balls[3] < balls[4]){
            console.log('Index of the heviest ball is 4')
        } else {
            console.log('Index of the heviest ball is 5')
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



