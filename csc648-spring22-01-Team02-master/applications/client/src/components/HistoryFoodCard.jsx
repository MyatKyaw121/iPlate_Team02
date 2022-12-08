import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";

function createFoodTable(meal) {
  let result = [];
  for (const property in meal) {
    if (property !== "mealType") {
      meal[property].map((food, index) => {
        result.push(
          <tr className={`table-${property}`} key={`${property}-${index}`}>
            <td>{food.name}</td>
            <td>{food.amount}</td>
          </tr>
        );
      });
    }
  }
  return result;
}

function HistoryFoodCard(props) {
  return (
    <div className="history-table">
      <div className="scrollable">
        <table className="table">
          {/* table header */}
          <thead>
            <tr>
              <th scope="col">Food Name</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody>{createFoodTable(props.meal_data)}</tbody>
        </table>
      </div>
    </div>
  );
}
export default HistoryFoodCard;
export { HistoryFoodCard, createFoodTable };
