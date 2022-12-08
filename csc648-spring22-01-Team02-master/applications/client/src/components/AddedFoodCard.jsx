import React from "react";
import Button from "react-bootstrap/esm/Button";

function AddedFoodCard(props) {
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
          <tbody id="food-cart-tbody"></tbody>
        </table>
      </div>
    </div>
  );
}

export default AddedFoodCard;
