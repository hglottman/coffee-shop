//coffeeShop//

/*var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: { 
      price: 12,
      beanRequirement: 10
      },
    americano:  { 
      price: 10,
      beanRequirement: 5
      },
    doubleShot:  { 
      price: 8,
      beanRequirement: 15
      },
    frenchPress: { 
      price: 12,
      beanRequirement: 12
      },
  },

  makeDrink: function (drinkType) {
    if(drinkType in this.drinkRequirements && this.drinkRequirements[drinkType].beanRequirement <= this.beans){
      (this.beans = this.beans - this.drinkRequirements[drinkType].beanRequirement);
        return console.log("making " + drinkType);
      }else if (drinkType in this.drinkRequirements && this.drinkRequirements[drinkType].beanRequirement > this.beans){
        return console.log( "Sorry, we're all out of beans!");
      }
     else{
        return console.log("Sorry, we don't make " + drinkType);
      }
    },

    money: 100,

    buySupplies: function (purchasedBeans){
      var beanCost = 2;
      this.money = this.money - (beanCost * purchasedBeans);
      console.log(this.money);
    },

    buyDrink: function (drinkType){
      this.money = this.money + this.drinkRequirements[drinkType].price;
      console.log(this.money);
      this.makeDrink(drinkType);
    }

  }

console.log(coffeeShop.makeDrink("latte"));
console.log(coffeeShop.makeDrink("americano"));
console.log(coffeeShop.makeDrink("filtered"));
console.log(coffeeShop.makeDrink("doubleShot"));
console.log(coffeeShop.makeDrink("frenchPress"));
console.log(coffeeShop.buySupplies(4));
console.log(coffeeShop.buyDrink ("latte"));*/