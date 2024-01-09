import React from "react";
import { Divider } from "@mui/material";
import badge_logo from "../../resources/badge_icon.png";
import car_compare_logo from "../../resources/car_compare_icon.png";
import car_logo from "../../resources/car_icon.webp";
import offer_logo from "../../resources/offer_icon.jpg";
import playstore_logo from "../../resources/playstore.webp";
import appstore_logo from "../../resources/appstore.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import BikeDekho_logo from "../../resources/BikeDekho-footer.svg";
import insurance_logo from "../../resources/id-main-logo.svg";
import rupyy_logo from "../../resources/rupyy-logo-Mobile.svg";
import zigwheels_logo from "../../resources/zigwheels.webp";
import "./Footer.css"

export default function Footer() {
  return (
    <div className="Footer">
      <Divider />
      <div className="Brand-container">
        <div className="Brand-container">
          <div>
            <img src={badge_logo} alt="badge_logo" style={{ width: "60px" }} />
          </div>
          <div style={{ paddingLeft: "5px" }}>
            <div className="brand-title">India’s #1</div>
            <p>Largest Auto portal</p>
          </div>
        </div>

        <div className="Brand-container">
          <div>
            <img src={car_logo} alt="badge_logo" style={{ width: "60px" }} />
          </div>
          <div style={{ paddingLeft: "5px" }}>
            <div className="brand-title">Car Sold</div>
            <p>Every 4 minute</p>
          </div>
        </div>

        <div className="Brand-container">
          <div>
            <img src={offer_logo} alt="badge_logo" style={{ width: "60px" }} />
          </div>
          <div style={{ paddingLeft: "5px" }}>
            <div className="brand-title">Offers</div>
            <p>Stay updated pay less</p>
          </div>
        </div>

        <div className="Brand-container">
          <div>
            <img
              src={car_compare_logo}
              alt="badge_logo"
              style={{ width: "60px" }}
            />
          </div>
          <div style={{ paddingLeft: "5px" }}>
            <div className="brand-title">Compare</div>
            <p>Decode the right car</p>
          </div>
        </div>
      </div>
      <Divider />

      <div
        className="Brand-container"
        style={{ marginBottom: "40px", marginTop: "40px" }}
      >
        <div className="footer-link-container">
          <div className="title"> OVERVIEW </div>
          <ul>
            <li>About us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Corporate Policies</li>
            <li>Investors</li>
          </ul>
        </div>

        <div className="footer-link-container">
          <div className="title"> OTHERS </div>
          <ul>
            <li>Scrap my car</li>
            <li>Advertise with Us</li>
            <li>Careers</li>
            <li>Customer Care</li>
          </ul>
        </div>

        <div className="footer-link-container">
          <div className="title"> CONNECT WITH US </div>
          <ul>
            <li>1800 200 3000 (Toll-Free)</li>
            <li>support@cardekho.com</li>
            <li>Dealer solutions</li>
            <li>Used Cars Business</li>
            <li>Contact Us</li>
            <li>Feedback</li>
          </ul>
        </div>

        <div className="footer-link-container">
          <div className="title"> EXPERIENCE CARDEKHO APP </div>
          <span>
            <img
              src={appstore_logo}
              alt="badge_logo"
              style={{ marginRight: "20px", width: "40%" }}
            />
            <img
              src={playstore_logo}
              alt="badge_logo"
              style={{ width: "40%" }}
            />
          </span>
          <p> Follow us </p>
          <span>
            <FacebookOutlinedIcon  />
            <TwitterIcon />
            <YouTubeIcon />
            <InstagramIcon />
          </span>
        </div>
      </div>
      <Divider />

      <div className="Brand-container">
        <p>© 2023 Girnar Software Pvt. Ltd.</p>
        <div className="logo-container">
          <div>
            <img src={rupyy_logo} alt="badge_logo" style={{ width: "70%" }} />
          </div>
          <div>
            <img src={zigwheels_logo} alt="badge_logo" style={{ width: "100%" }}/>
          </div>
          <div style={{width:"250px"}}>
            <img src={BikeDekho_logo} alt="badge_logo" style={{ width: "40%",marginLeft:"60px" }}/>
          </div>
          <div>
            <img src={insurance_logo} alt="badge_logo" style={{ width: "100%" }}/>
          </div>
        </div>
      </div>
    </div>
  );
}
