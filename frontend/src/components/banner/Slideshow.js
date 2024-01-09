import React from "react";
import "./Slideshow.css";
import banner1 from "../../resources/bannerImg1.webp";
import banner2 from "../../resources/bannerImg2.webp";
import banner3 from "../../resources/bannerImg3.avif";
import Form from "./Banner-form";
import { useEffect } from "react";
export default function Slideshow() {
  let slideIndex = 0;

  const setSlideCount = (value) => {
    showSlidesIndex(value);
    slideIndex = value;
    
  };

  function showSlidesIndex(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let slideButtons = document.getElementsByClassName("slideButton");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";
    
    switch (n-1) {
        case 0:
            for (i = 0; i < slideButtons.length; i++) {
                slideButtons[i].className = "slideButton orange";
              }
          slideButtons[n - 1].className = "slideButton active orange";
          break;
        case 1:
            for (i = 0; i < slideButtons.length; i++) {
                slideButtons[i].className = "slideButton white";
              }
          slideButtons[n - 1].className = "slideButton active white";
          break;
        case 2:
            for (i = 0; i < slideButtons.length; i++) {
                slideButtons[i].className = "slideButton black";
              }
          slideButtons[n - 1].className = "slideButton active black";
          break;
        default:
            for (i = 0; i < slideButtons.length; i++) {
            slideButtons[i].className = "slideButton orange";
          }
          slideButtons[n - 1].className = "slideButton active orange";
      }

  }

  const showSlides = () => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let slideButtons = document.getElementsByClassName("slideButton");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
   
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    switch (slideIndex - 1) {
        case 0:
            for (i = 0; i < slideButtons.length; i++) {
                slideButtons[i].className = "slideButton orange";
              }
          slideButtons[slideIndex - 1].className = "slideButton active orange";
          break;
        case 1:
            for (i = 0; i < slideButtons.length; i++) {
                slideButtons[i].className = "slideButton white";
              }
          slideButtons[slideIndex - 1].className = "slideButton active white";
          break;
        case 2:
            for (i = 0; i < slideButtons.length; i++) {
                slideButtons[i].className = "slideButton black";
              }
          slideButtons[slideIndex - 1].className = "slideButton active black";
          break;
        default:
            for (i = 0; i < slideButtons.length; i++) {
            slideButtons[i].className = "slideButton orange";
          }
          slideButtons[slideIndex - 1].className = "slideButton active orange";
      }

    setTimeout(showSlides, 50000); // Change image every 5 seconds
  };

  useEffect(() => {
    console.log("jshdjka");
    showSlides();
    // eslint-disable-next-line
  },[]);

  return (
    <div>
      <div className="slideshow-container" style={{ position: "relative"}}>
        <div className="mySlides fade">
          <img src={banner1} style={{ width: "100%" ,height:"100%"}} alt="banner" />
        </div>

        <div className="mySlides fade">
          <img src={banner2} style={{ width: "100%" ,height:"100%"}} alt="banner" />
        </div>

        <div className="mySlides fade">
          <img src={banner3} style={{ width: "100%" ,height:"100%"}} alt="banner" />
        </div>
        <div>
            <Form/>
          </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "40%",
            right: "10%",
          }}
        >
          
          <div style={{ display: "flex" }}>
            <div className="slideButton" onClick={() => setSlideCount(1)}>
              Badhte India Ka Bharosa
            </div>
            <div className="slideButton" onClick={() => setSlideCount(2)}>
              Best Deals Ka Bharosa
            </div>
            <div className="slideButton" onClick={() => setSlideCount(3)}>
              Connected Cars
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
