import React, { useEffect, useRef } from "react";

// npm component
import DatePicker from "react-datepicker";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// self-built component
import Navbar from "../Navbar";
import Footer from "../Footer";
import HistoryFoodCard from "../HistoryFoodCard";

// bootstrap
import Button from "react-bootstrap/esm/Button";

import { getGroupTotalCalorie } from "../../food_nutrition";

// global variable
var globalVar = window.sessionStorage;

function History() {
  // State hooks
  const [date, setDate] = React.useState(new Date());
  const [records, setRecords] = React.useState([]);

  function hasRecord(meal) {
    return (
      meal.veggie.length !== 0 ||
      meal.fruits.length !== 0 ||
      meal.grains.length !== 0 ||
      meal.protein.length !== 0
    );
  }

  function updateRecords(data) {
    setRecords([]);

    // update records hook (only add when has record)
    if (hasRecord(data.breakfast)) {
      console.log("Has Breakfast data!");
      setRecords((prevRecords) => {
        return [...prevRecords, data.breakfast];
      });
    }

    if (hasRecord(data.lunch)) {
      console.log("Has Lunch data!");
      setRecords((prevRecords) => {
        return [...prevRecords, data.lunch];
      });
    }

    if (hasRecord(data.dinner)) {
      console.log("Has Dinner data!");
      setRecords((prevRecords) => {
        return [...prevRecords, data.dinner];
      });
    }
  }

  function getFoodHistory() {
    console.log("----- get food history -----");
    const body = {
      name: JSON.parse(globalVar.getItem("username")),
      date:
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    };

    const settings = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch("/api/FoodHistory", settings)
      .then((res) => res.json())
      .then((body) => {
        console.log("body.res1: ", body.res1);
        return body.res1;
      })
      .catch((err) => {
        alert(err);
        window.location.href = "/FoodRecord";
      });
  }

  async function renderHistory() {
    console.log("----- RENDER HISTORY -----");
    let records = await getFoodHistory();
    return records;
  }

  function getData(record) {
    console.log("----- inside get data -----");
    console.log("record: ", record);
    const { mealType, veggie, fruits, grains, protein } = record;
    //1. get total calorie for protein
    const protein_cal = getGroupTotalCalorie(protein, "protein");
    const fruits_cal = getGroupTotalCalorie(fruits, "fruits");
    const grains_cal = getGroupTotalCalorie(grains, "grains");
    const veggie_cal = getGroupTotalCalorie(veggie, "veggie");
    console.log("Protein: ", protein_cal);
    console.log("Fruits: ", fruits_cal);
    console.log("Grains: ", grains_cal);
    console.log("Veggie: ", veggie_cal);
    const total_cal = protein_cal + fruits_cal + grains_cal + veggie_cal;

    ChartJS.register(ArcElement, Tooltip, Legend);

    let data = {
      labels: ["Protein", "Fruits", "Grains", "Veggies"],
      datasets: [
        {
          label: "Food Groups",
          data: [
            protein_cal / total_cal,
            fruits_cal / total_cal,
            grains_cal / total_cal,
            veggie_cal / total_cal,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    return data;
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* History Main Body */}
      <div className="history-main">
        {/* Header: Date & meal selecting */}
        <div className="section-title history-header">
          <div className="row">
            <div className="col align-self-start">
              <h2>Search My Plate for: </h2>
            </div>

            {/* Date for recording */}
            <div className="col align-self-start">
              <DatePicker
                id="dateOfHistory"
                popperPlacement="bottom"
                selected={date}
                onChange={(newDate) => setDate(newDate)}
              />
            </div>

            {/* Search Button */}
            <div className="col align-self-start">
              <Button
                onClick={() => {
                  const body = {
                    name: JSON.parse(globalVar.getItem("username")),
                    date:
                      date.getFullYear() +
                      "-" +
                      (date.getMonth() + 1) +
                      "-" +
                      date.getDate(),
                  };

                  const settings = {
                    method: "post",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                  };

                  // getFoodHistory

                  fetch("/api/FoodHistory", settings)
                    .then((res) => res.json())
                    .then((body) => {
                      updateRecords(body.res1);
                    })
                    .catch((err) => {
                      alert ("There is no data recorded by user for this date!!");
                    });
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* display */}
        {records.map((record, index) => {
          return (
            <div className="history-content">
              <div className="pie-chart">
                <h3 className="pie-meal-title">{record.mealType}</h3>
                <div
                  style={{
                    height: "500px",
                    width: "500px",
                    marginLeft: "0 auto",
                  }}
                >
                  <Pie
                    options={{
                      plugins: {
                        legend: {
                          display: true,
                          onClick: () => {},
                        },
                      },
                    }}
                    data={getData(record)}
                  />
                </div>
              </div>

              {/* Food History Display Table */}
              <HistoryFoodCard key={index} meal_data={record} />
            </div>
          );
        })}
      </div>


    </div>
  );
}

export default History;
