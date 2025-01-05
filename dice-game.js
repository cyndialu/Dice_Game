function rollDice(){
    let goldCoins = 0;
    for(let i=0; i<10; i++){
        const roll = Math.floor(Math.random()*6)+1;
        alert("You roll a " + roll);
        if (roll === 1){
            alert("Sorry, Game over.");
            break;
        }
        if (roll === 4){
            alert("You lost 1 gold coin");
            if(goldCoins>0){
                goldCoins-=1;
            }            
        }
        if (roll === 2 || roll === 3){
            continue;
        }
        if (roll === 5 || roll ===6){
            alert("Congratulations! You win "+ roll + " gold coins!");
            goldCoins += roll;
        }
        alert("Current gold coins: "+ goldCoins);
    }
    alert("You have won "+ goldCoins + " gold coins in total!");
    
}