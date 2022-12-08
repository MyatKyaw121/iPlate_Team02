// calorie / 100g

const foodsNutrition = {
  veggie: [
    { name: "Broccoli", calorie: 34 },
    { name: "Cabbage", calorie: 22 },
    { name: "Spinach", calorie: 23 },
    { name: "Kale", calorie: 28 },
    { name: "Cauliflower", calorie: 23 },
    { name: "Bok Choi", calorie: 12 },
  ],
  fruits: [
    { name: "Apple", calorie: 52 },
    { name: "Orange", calorie: 47 },
    { name: "Strawberry", calorie: 32 },
    { name: "Watermelon", calorie: 30 },
    { name: "Banana", calorie: 89 },
    { name: "Grapes", calorie: 69 },
    { name: "Grape Fruit", calorie: 32 },
    { name: "Cherry", calorie: 63 },
  ],
  grains: [
    { name: "Rice", calorie: 130 },
    { name: "Potato", calorie: 86 },
    { name: "Sweet Potato", calorie: 90 },
    { name: "Corn", calorie: 96 },
    { name: "Noodles", calorie: 109 },
    { name: "Pasta", calorie: 158 },
    { name: "Bread", calorie: 265 },
  ],
  protein: [
    { name: "Chicken", calorie: 110 },
    { name: "Beef", calorie: 179 },
    { name: "Turkey", calorie: 135 },
    { name: "Eggs", calorie: 155 },
    { name: "Tofu", calorie: 145 },
    { name: "Tempeh", calorie: 193 },
    { name: "Paneer", calorie: 77 },
    { name: "Salmon", calorie: 206 },
  ],
};

function getFoodCalorie(foodGroup, foodName, amount) {
  const foundFood = foodsNutrition[foodGroup].find((food) => {
    return food.name === foodName;
  });

  if (foundFood) {
    // console.log("Find the food: ", foundFood);
    // console.log(foundFood.calorie);
    return foundFood.calorie * (amount / 100);
  }
  return -1;
}

// "breakfast" : {
//         "mealType" : "breakfast",
//         "veggie" : [
//             {
//                 "name" : "Broccoli",
//                 "amount" : 100
//             },
//             {
//                 "name" : "Cabbage",
//                 "amount" : 100
//             }
//         ],
//         "fruits" : [
//             {
//                 "name" : "Orange",
//                 "amount" : 100
//             }
//         ],
//         "grains" : [
//             {
//                 "name" : "Rice",
//                 "amount" : 100
//             }
//         ],
//         "protein" : [
//             {
//                 "name" : "Beef",
//                 "amount" : 100
//             }
//         ]
//     }

//pass in food array
function getGroupTotalCalorie(foods, foodGroupName) {
  let total = 0;
  console.log("----- INSIDE GET TOTAL CAL -----");
  console.log("given foods: ", foods);
  console.log("given foodGroupName: ", foodGroupName);
  foods.forEach((food) => {
    // console.log("Food: ", food);
    // let cal = getFoodCalorie(foodGroupName, food.name, food.amount);
    // console.log(`${food.name}: ${cal} calorie`);
    total += getFoodCalorie(foodGroupName, food.name, food.amount);
  });
  console.log(`Total for ${foodGroupName} is ${total} calorie`);
  return total;
}

export { foodsNutrition, getGroupTotalCalorie };
