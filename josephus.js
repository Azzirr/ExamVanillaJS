function josephus(n, k){
    let soldiers = [];
    let deadSoldiers = [];
    let killCounter = k;
    for(let i = 0; i < n; i++){
        soldiers.push((i + 1))
    }
    console.log(soldiers)
    if(n === 1){
        console.log('There is only one person, I suggest to commit Sepuku.')
    }
    while (soldiers.length > 1){
        for(let i = 0; i < soldiers.length; i++){
            killCounter--
            if(killCounter === 0){
                deadSoldiers.push(soldiers[i])
                killCounter = k;
            }
        }
        soldiers = soldiers.filter(element => {
            return !deadSoldiers.includes(element)
        })
        for(let j = 0; j < soldiers.length; j++){
            console.log(soldiers[j] + ' kills ' + deadSoldiers[j])
        }    
    }
    console.log(deadSoldiers)
    console.log(soldiers)
}
josephus(8, 2)