import React, { useState } from "react";
import "./Banner-form.css";
import { Button } from "@mui/material";
import RowRadioButtonsGroup from "./Banner-radioButton";
import SelectLabels from "./Banner-form-select";
import SendIcon from "@mui/icons-material/Send";
import JSON from "../../data/car_details.json";
import downArrowIcon from "../../resources/down-arrow-icon.png";

const ChangeBg = () => {
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  if (btn1.style.backgroundColor === "white") {
    btn1.style.backgroundColor = "black";
    btn1.style.color = "white";
    btn2.style.backgroundColor = "white";
    btn2.style.color = "black";
  } else if (btn2.style.backgroundColor === "white") {
    btn1.style.backgroundColor = "white";
    btn1.style.color = "black";
    btn2.style.backgroundColor = "black";
    btn2.style.color = "white";
  }
};

export default function Banner_Form() {
  const [val, setval] = useState("By_Budget");
  const [filteredModel, setfilteredModel] = useState("");
  const car_price = [
    "1-5 Lakh",
    "5-10 Lakh",
    "15-20 Lakh",
    "20-35 Lakh",
    "35-50 Lakh",
    "50 Lakh- Crore",
    "Above 1 Crore",
  ];
  const car_types = [
    "Hatchback",
    "Sedan",
    "SUV",
    "MUV",
    "Luxury",
    "Super Luxury",
    "Convertible",
    "Hybrid",
    "Couple",
    "Pickup Truck",
    "Minivan",
    "Vegan",
  ];
  const car_brand = JSON.map((Item) => Item.brand);
  const car_json_detail = JSON.filter(
    (Item) => Item.brand === filteredModel.Item
  );
  const car_model_array = car_json_detail.map((item) => item.models);

  const HandleClick = (value) => {
    setval(value);
  };

  const HandleFilter = (value) => {
    if (car_brand.includes(value.Item)) {
      setfilteredModel(value);
    }
  };
  return (
    <div>
      <div className="Banner-container">
        <h1>Find your right car</h1>
        <div className="Banner-Button-container">
          <div className="old-new-btn-container">
            <Button
              style={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
              }}
              id="btn1"
              onClick={() => ChangeBg()}
            >
              New Car
            </Button>
            <img src={downArrowIcon} alt="downArray" />
          </div>
          <div className="old-new-btn-container">
            <Button
              id="btn2"
              onClick={() => ChangeBg()}
              style={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
              }}
            >
              Used Car
            </Button>
            <img src={downArrowIcon} alt="downArray" />
          </div>
        </div>
        <div >
          <RowRadioButtonsGroup HandleClick={HandleClick} />
        </div>

        {val === "By_Budget" ? (
          <SelectLabels
            label1="Select Budget"
            car_detail={car_price}
            HandleFilter={HandleFilter}
          />
        ) : (
          <SelectLabels
            label1="Select Brand"
            car_detail={car_brand}
            HandleFilter={HandleFilter}
          />
        )}

        {val === "By_Budget" ? (
          <SelectLabels
            label1="All Vehicle Types"
            car_detail={car_types}
            HandleFilter={HandleFilter}
          />
        ) : (
          <SelectLabels
            label1="Select Model"
            car_detail={car_model_array.length > 0 ? car_model_array[0] : []}
            HandleFilter={HandleFilter}
          />
        )}

        <Button
          variant="contained"
          size="large"
          style={{
            width: "350px",
            marginTop: "24px",
            padding: "15px 0 15px 0",
          }}
        >
          Search
        </Button>
        <div style={{ marginTop: "20px", float: "right" }}>
          <Button endIcon={<SendIcon />}> Advanced Search</Button>
        </div>
      </div>
    </div>
  );
}
