import React from "react";
import "./card.css";
import car from "../../resources/car.jpg"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function card(props) {
  return (
    <div className="card">
      <img src={car} alt="Avatar" style={{width:"100%", borderRadius:"5px", height:"194px"}} />
      <div className="container">
        <p>{props.title}</p>
        <p style={{display:"flex",alignItems:"center"}}><span><CurrencyRupeeIcon fontSize="inherit"/></span>5.92 - 8.85 Lakh*</p>
        <button style={{width:"100%", height:"40px", color: "#f75d34", border: "1px solid #f75d34" , background: "#fff"}}> Check January Offers</button>
      </div>
    </div>
  );
}
