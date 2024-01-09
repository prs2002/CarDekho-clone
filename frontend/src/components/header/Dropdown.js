import React from "react";
import "./Dropdown.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";

export default function Dropdown(props) {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <Typography variant="button" display="block" gutterBottom>
          {props.title}
        </Typography>
        <span>
          <ArrowDropDownIcon />
        </span>
      </button>
      <div className="dropdown-content">
        <a href="/">Link 1</a>
        <a href="/">Link 2</a>
        <a href="/">Link 3</a>
      </div>
    </div>
  );
}
