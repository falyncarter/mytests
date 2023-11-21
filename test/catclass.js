class CatCareData {
  constructor(foodLevel, waterLevel, catBehavior) {
    this.foodLevel = foodLevel;
    this.waterLevel = waterLevel;
    this.catBehavior = catBehavior;

    this.calculateFoodPoints();
    this.calculateWaterPoints();
    this.calculateTreatsPoints();

  }

  calculateFoodPoints() {
    const foodPoints = {
      fine: "Don't give food",
      medium: "Give a little food",
      low: "Give a lot of food",
    };

    this.foodPts = foodPoints[this.foodLevel];
  }

  calculateWaterPoints() {
    const waterPoints = {
      fine: "Don't give water",
      medium: "Give a little water",
      low: "Give a lot of water",
    };

    this.waterPts = waterPoints[this.waterLevel];
  }

  calculateTreatsPoints() {
    const treatsPoints = {
      great: 3,
      good: 2,
      meh: 1,
      bad: 0,
    };

    this.treatsPts = treatsPoints[this.catBehavior];
  }

}

export { CatCareData };
