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
      fine: 0,
      medium: 1,
      low: 2,
    };

    this.foodPts = foodPoints[this.foodLevel];
  }

  calculateWaterPoints() {
    const waterPoints = {
      fine: 0,
      medium: 1,
      low: 2,
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
