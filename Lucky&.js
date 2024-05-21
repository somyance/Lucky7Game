let points=0;

function rollDice(){
    const dice1=Math.floor(Math.random()*6)+1;
    const dice2=Math.floor(Math.random()*6)+1;
    const dice1Element=document.getElementById('dice1');
    const dice2Element=document.getElementById('dice2');
    const messageElement=document.getElementById('message');
    const pointsElement=document.getElementById('points');


    dice1Element.textContent=`🎲 ${dice1}`;
    dice2Element.textContent = `🎲 ${dice2}`;

    const sum=dice1+dice2;

    if(sum===7){
        points *=2;
        messageElement.textContent="Lucky 7! Your points are doubled!"
    }else{
        points +=sum;
        messageElement.textContent="keep rolling!";
    }
    pointsElement.textContent=points;

}