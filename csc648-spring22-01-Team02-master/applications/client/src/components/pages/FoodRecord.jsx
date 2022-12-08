import React, { useState, useEffect, Component, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Pie, getElementAtEvent, getDatasetAtEvent } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Dropdown from "react-bootstrap/Dropdown";
import FoodOptionsCard from "../FoodOptionsCard";
import Button from "react-bootstrap/esm/Button";
import AddedFoodCard from "../AddedFoodCard";
import { HistoryFoodCard, createFoodTable } from "../HistoryFoodCard";

Chart.register(ArcElement);

// Testing data
let foods = {
  Veggie: ["Broccoli", "Cabbage", "Spinach", "Kale", "Cauliflower", "Bok Choi"],
  Fruits: [
    "Apple",
    "Orange",
    "Strawberry",
    "Watermelon",
    "Banana",
    "Grapes",
    "Grape Fruit",
    "Cherry",
  ],
  Grains: [
    "Rice",
    "Potato",
    "Sweet Potato",
    "Corn",
    "Noodles",
    "Pasta",
    "Bread",
  ],
  Protein: [
    "Chicken",
    "Beef",
    "Turkey",
    "Eggs",
    "Tofu",
    "Tempeh",
    "Paneer",
    "Salmon",
  ],
};

var globalVar = window.sessionStorage;

const FoodRecord = (props) => {
  // Hooks
  const [startDate, setStartDate] = React.useState(new Date());
  const [graph, setGraph] = React.useState({
    labels: [],
    data: [],
  });
  const [returnFoods, setReturnFoods] = React.useState({
    Veggie: [],
    Fruits: [],
    Grains: [],
    Protein: [],
  });
  const [returnMealType, setReturnMealType] = React.useState("Meal");
  const [foodGroupLabel, setFoodGroupLabel] = React.useState("Food Group");
  const [foodLabelIndex, setFoodLabelIndex] = React.useState(0);

  const chartRef = useRef();
  const graphData = [
    {
      label: "Veggie",
      value: 20,
    },
    {
      label: "Fruits",
      value: 20,
    },
    {
      label: "Carbs",
      value: 20,
    },
    {
      label: "Protein",
      value: 20,
    },
  ];

  function findFoodIndex(foodName, foodGroupArray) {
    return foodGroupArray.findIndex((food) => food.name === foodName);
  }

  function updateJSON(foodGroups, newFood, newFoodAmount) {
    if (newFoodAmount !== "") {
      setReturnFoods((prev) => {
        const foundFoodIndex = findFoodIndex(newFood, prev[foodGroups]);
        if (foundFoodIndex != -1) {
          prev[foodGroups][foundFoodIndex].amount = parseInt(newFoodAmount, 10);
        } else {
          prev[foodGroups].push({
            name: newFood,
            amount: parseInt(newFoodAmount, 10),
          });
        }
        console.log("prev: ", prev);
        return { ...prev };
      });
    }
  }

  function updateMealType(event) {
    setReturnFoods({
      Veggie: [],
      Fruits: [],
      Grains: [],
      Protein: [],
    });
    setReturnMealType(event.target.textContent);
  }

  function updateFoodGroup(event) {
    setFoodGroupLabel(event.target.textContent);
  }

  useEffect(() => {
    const labels = [];
    const data = [];

    graphData?.map((v) => {
      labels.push(v?.label);
      data.push(v?.value);
    });

    setGraph({
      labels: labels,
      data: data,
    });
  }, []);

  const data = {
    labels: graph.labels,
    datasets: [
      {
        labels: "Food Type",
        data: graph.data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <div className="row">
            <div className="col align-self-start">
              <h2>My Plate for: </h2>
            </div>

            {/* Date for recording */}
            <div className="col align-self-start">
              <DatePicker
                id="dateOfRecord"
                popperPlacement="bottom"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            {/* DropDown for meal */}
            <div className="col align-self-start">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {returnMealType}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={updateMealType}>
                    Breakfast
                  </Dropdown.Item>
                  <Dropdown.Item onClick={updateMealType}>Lunch</Dropdown.Item>
                  <Dropdown.Item onClick={updateMealType}>Dinner</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* DropDown for food category */}
            <div className="col align-self-start">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {foodGroupLabel}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={updateFoodGroup}>
                    Veggie
                  </Dropdown.Item>
                  <Dropdown.Item onClick={updateFoodGroup}>
                    Grains
                  </Dropdown.Item>
                  <Dropdown.Item onClick={updateFoodGroup}>
                    Protein
                  </Dropdown.Item>
                  <Dropdown.Item onClick={updateFoodGroup}>
                    Fruits
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="food-record-main">
          {/* Food cart */}
          {Object.keys(returnFoods)
            .map((key) => returnFoods[key])
            .filter((foodArr) => foodArr.length > 0).length > 0 && (
            <div className="food-options">
              <nav
                id="navbar-example2"
                className="navbar navbar-light bg-light px-3"
              >
                <h3 className="navbar-brand">Food Cart</h3>
              </nav>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Food Name</th>
                    <th scope="col">Amount (g)</th>
                  </tr>
                </thead>
                <tbody>{createFoodTable(returnFoods)}</tbody>
              </table>
            </div>
          )}
          <FoodOptionsCard
            mealType={returnMealType}
            foodGroupName={foodGroupLabel}
            foods={foods[foodGroupLabel]}
            returnFoods={returnFoods}
            setReturnFoods={updateJSON}
          />
        </div>

        {/* record button */}
        {returnMealType != "Meal" &&
          Object.keys(returnFoods)
            .map((key) => returnFoods[key])
            .filter((foodArr) => foodArr.length > 0).length > 0 && (
            <Button
              onClick={
                () => {
                  // calorie calculation
                  // 1. calculate veggies calorie
                  if (returnMealType === "Meal")
                    alert("Please choose a meal type first!");
                  else {
                    const body = {
                      name: JSON.parse(globalVar.getItem("username")),
                      date:
                        startDate.getFullYear() +
                        "-" +
                        (startDate.getMonth() + 1) +
                        "-" +
                        startDate.getDate(),
                      mealType: returnMealType,
                      veggie: returnFoods.Veggie,
                      fruits: returnFoods.Fruits,
                      protein: returnFoods.Protein,
                      grains: returnFoods.Grains,
                    };
                    console.log("body from record onclick: ", body);
                    const settings = {
                      method: "post",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(body),
                    };
                    alert("Meal recorded succesfully");
                    console.log("record!");
                    fetch("/api/foodRecord", settings)
                      .then((res) => res.json())
                      .then((body) => {
                        if (body.isSucceed === true) {
                          globalVar.setItem(
                            "returnFoods",
                            JSON.stringify(body.returnFoods)
                          );
                          globalVar.setItem(
                            "isSucceed",
                            JSON.stringify(body.isSucceed)
                          );
                        } else {
                          alert(body.message);
                        }
                        console.log(body);
                      })
                      .catch((err) => {
                        alert(err);
                        window.location.href = "/FoodRecord";
                      });
                  }
                }
              }
            >
              Record!
            </Button>
          )}
      </div>

    </div>
  );
};
export default FoodRecord;
