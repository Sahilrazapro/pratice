
function getMilk(money , costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

 // var numberOfBottles = Math.floor(money/1.5);
  
  console.log("buy " + calcBottles(money , costPerBottle) + " bottles of Milk");

  
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return money % 1.5 ;
}

 function calcBottles(startingMoney , costPerBottle){
    var numberOfBottles = Math.floor(startingMoney/costPerBottle);
  return numberOfBottles;
 }

 var change = getMilk(10,1.5);
console.log(change);
