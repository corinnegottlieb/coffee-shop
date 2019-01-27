


const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: {beanRequirement: 10, price: 5},
    americano: {beanRequirement: 5, price: 2.5},
    doubleShot: {beanRequirement: 15, price: 7.5},
    frenchPress: {beanRequirement: 17, price: 8.5}
  },

  // makeDrink: function (drinkType) {
  //   if (!this.drinkRequirements[drinkType]) {
  //     console.log("Sorry we don't make " + drinkType)
  //   }
  //   else { 
  //     if (this.drinkRequirements[drinkType] > this.beans) {
  //     console.log("Sorry,we are all out of beans")}
  //     else (this.beans -= this.drinkRequirements[drinkType])
  //     }
  // }

  makeDrink: function (drinkType) {
    if (!this.drinkRequirements[drinkType]) {
      console.log("Sorry we don't make " + drinkType)
      return;
    }
    else if (this.drinkRequirements[drinkType].beanRequirement > this.beans) {
      console.log("Sorry,we are all out of beans")
      return;
    }
    else {
      this.buyDrink(drinkType)
      console.log(`you have ${this.beans} left and $ ${this.money}`)
  
      return;
    }
  },

  money: 1000,

  buyBeans: function(numBeans){
   let cost = numBeans*10
   this.money -= cost
    console.log("you bought " + numBeans + " beans for " + cost + " and now you have $" + this.money + " left")
  },

  buyDrink: function(drinkType){
this.beans -= this.drinkRequirements[drinkType].beanRequirement;
this.money += this.drinkRequirements[drinkType].price;
    
  }

}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");


coffeeShop.buyBeans(10);


//if somoene buydrink(latte) increase money by 5 & 
//if someone buys americano increase money by 2.5
//if somoene buydrink double shot increase money by 17.5
//if someone buys frenchPress increase money by 8.5
// if someones buys a drink
  //make a drink and take away money