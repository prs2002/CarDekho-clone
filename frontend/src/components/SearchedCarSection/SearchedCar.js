import { Avatar, Divider } from "@mui/material";
import {useState, React} from "react";
import "./SearchedCar.css";
import cars from '../../cars';
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import { grey } from "@mui/material/colors";
import Card from "../common/Card";

export default function SearchedCar() {

// Initialize state
const [currentSlide, setCurrentSlide] = useState(0);

const nextSlide = () => {
  const maxSlides = cars.length;

  if (currentSlide < maxSlides - 1) {
    setCurrentSlide(currentSlide + 1);
  } else {
    setCurrentSlide(0); // Reset to the first slide if at the end
  }
};

const previousSlide = () => {
  if (currentSlide > 0) {
    setCurrentSlide(currentSlide - 1);
  } else {
    setCurrentSlide(cars.length - 1); // Go to the last slide if at the beginning
  }
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
        <div className="slider abc" style={{ transform: `translate(${-currentSlide * 325}px, 0px)`, transition: "transform 0.4s ease-in-out 0s" }}>
          {
            cars.map((car) => (
              <div className="slider-item"><Card product= {car} /></div>
            ))
          }
          </div>
        </div> 
      </div>
    </div>
  );
}
