import { Avatar, Divider } from "@mui/material";
import React from "react";
import "./SearchedCar.css";
import Card from "../common/card";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import { grey } from "@mui/material/colors";

export default function SearchedCar() {

  let initLefttranslate="0";


  const nextSlide =()=>{  
    initLefttranslate-=325;
    let bb= document.getElementsByClassName("abc")
    bb[0].style.transform="translate("+initLefttranslate+"px, 0px";
    
  };
  const previousSlide =()=>{  
    initLefttranslate+=325;
    let bb= document.getElementsByClassName("abc")
    bb[0].style.transform="translate("+initLefttranslate+"px, 0px";
  };


  return (
    <div style={{ position: "relative" }}>
      <div  className="hoverPointer" style={{ position: "absolute", top: "50%", right: "0.6%" ,zIndex:"1"}} onClick={nextSlide} >
        <Avatar sx={{ bgcolor: grey[50] }} >
          <NavigateNextOutlinedIcon
            sx={{ color: grey[900] }}
            fontSize="large"
          />
        </Avatar>
      </div>
      <div className="hoverPointer" style={{ position: "absolute", top: "50%", left: "0.5%", zIndex:"1" }} onClick={previousSlide}>
        <Avatar sx={{ bgcolor: grey[50] }}>
          <NavigateBeforeOutlinedIcon
            sx={{ color: grey[900] }}
            fontSize="large"
          />
        </Avatar>
      </div>

      <div
        style={{
          margin: "20px",
          padding: "10px",
          boxShadow: "0 1px 3px rgb(36 39 44 / 15%)",
        }}
      >
        <h2>The most searched car</h2>
        <div style={{ display: "flex", fontSize: "16px", lineHeight: "20px" }}>
          <div className="tabTitle">Hatchback</div>
          <div className="tabTitle">Sedan</div>
          <div className="tabTitle">SUV</div>
          <div className="tabTitle">MUV</div>
          <div className="tabTitle">Luxury</div>
        </div>
        <Divider />

        <div style={{overflow: "hidden"}}>
          <div className ="slider abc" style={{transform:"translate(0px,0px)",transition:"transform 0.4s ease-in-out 0s"}}>
          <div className="slider-item"><Card title="Maruti Suzuki 1" /></div>
          <div className="slider-item"><Card title="Maruti Suzuki 2" /></div>
          <div className="slider-item"><Card title="Maruti Suzuki 3" /></div>
          <div className="slider-item"><Card title="Maruti Suzuki 4" /></div>
          <div className="slider-item"><Card title="Maruti Suzuki 5" /></div>
          <div className="slider-item"><Card title="Maruti Suzuki 6" /></div>
          <div className="slider-item"><Card title="Maruti Suzuki 7" /></div>
          <div className="slider-item"><Card title="Maruti Suzuki 8" /></div>
          <div className="slider-item"><Card title="Maruti Suzuki 9" /></div>
          <div className="slider-item"><Card title="Maruti Suzuki 10"/></div>
          <div className="slider-item"><Card title="Maruti Suzuki 11"/></div>
          </div>
        </div> 
      </div>
    </div>
  );
}
