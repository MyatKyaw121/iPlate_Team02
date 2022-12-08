import React from "react";
import Button from "react-bootstrap/esm/Button";

function FoodGroupCard(props) {
  function addCartField(foodGroup, foodName, foodAmount) {
    const parent = document.getElementById("food-cart-tbody");
    parent.appendChild(
      <tr className={`table-${foodGroup}`}>
        <td>{foodName}</td>
        <td>{foodAmount}</td>
      </tr>
    );
  }
  return (
    <div>
      {props.foodGroupName !== "Food Group" && (
        <div className="food-options">
          <nav
            id="navbar-example2"
            className="navbar navbar-light bg-light px-3"
          >
            <h3 className="navbar-brand">{props.foodGroupName}</h3>
          </nav>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Food Name</th>
                <th scope="col">Amount (g)</th>
                <th scope="col">Record</th>
              </tr>
            </thead>
            <tbody>
              {props.foods.map((food, index) => {
                return (
                  <tr key={index}>
                    <td>{food}</td>
                    <td>
                      <input id={index} />
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          if (props.mealType === "Meal") {
                            console.log("Please choose a meal type!");
                            alert("Please choose a meal type!");
                          } else {
                            const amount = document.getElementById(index).value;
                            props.setReturnFoods(
                              props.foodGroupName,
                              food,
                              amount
                            );
                          }
                        }}
                      >
                        add
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default FoodGroupCard;
