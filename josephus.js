function josephus(n, k){
    let soldiers = [];
    let deadSoldiers = [];
    let killCounter = k;
    for(let i = 0; i < n; i++){
        soldiers.push((i + 1))
    }
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

        if(deadSoldiers.length === 3){
            for(let j = 0; j < soldiers.length; j++){
                if(soldiers[j] <= 6){
                    console.log(soldiers[j] + ' kills ' + deadSoldiers[j])
                }
            }
        }
        console.log(deadSoldiers)
        for(let z = 4; z <= 6; z++){
            if(deadSoldiers.length === z){
                console.log(soldiers[0] + ' kills ' + deadSoldiers[deadSoldiers.length - 1])
            }
        }
    }
    console.log(soldiers[0] + ' remains alive!')

}
josephus(7, 2)