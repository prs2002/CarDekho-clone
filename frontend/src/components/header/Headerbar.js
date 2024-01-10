import React from "react";
import "./Header.css";
import "./Dropdown.css";
import logo from "../../resources/logo.svg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {
  Avatar,
  Divider,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import Dropdown from "./Dropdown";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Headerbar() {
  const [lang, setLang] = useState("English");
  const handleChange = (event) => {
    setLang(event.target.value);
  };
  const redirectToLogin = () => {
    console.log("Chutiya");
  };
  return (
    <div className="fixed-top" style={{ backgroundColor: "white" , zIndex:"5"}}>
      <div className="header" style={{ marginTop: "15px", marginBottom: "15px" }}>
        <div>
          <img
            src={logo}
            alt="logo"
            style={{ width: "172px", height: "42px" }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[]}
            sx={{ width: 400 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Cars or Brands eg. Swift, or Maruti"
              />
            )}
          />
          <Avatar sx={{ bgcolor: grey[900], height: 56 }} variant="square">
            <SearchIcon />
          </Avatar>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <FormControl variant="standard" size="small">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={lang}
                onChange={handleChange}
                label=""
              >
                <MenuItem value="English">
                  <Typography variant="caption" display="block" gutterBottom>
                    English
                  </Typography>
                </MenuItem>
                <MenuItem value="Hindi">
                  <Typography variant="caption" display="block" gutterBottom>
                    Hindi
                  </Typography>
                </MenuItem>
                <MenuItem value="German">
                  <Typography variant="caption" display="block" gutterBottom>
                    German
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          <div style={{ display: "flex" }} className="userLogin">
            <div style={{ margin: "0px 30px" }}>
              <FavoriteBorderOutlinedIcon fontSize="small" />
            </div>
            <AccountCircleOutlinedIcon fontSize="small" />
            <button style={{ marginLeft: '5px' }} onClick={redirectToLogin}>
              Login / Register
            </button>
          </div>
        </div>
      </div>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          //margin: "15px 0px",
        //  padding:"15px 0px"
        }}
      >
        <div className="header" style={{ justifyContent: "flex-start" , marginTop: "0px", marginBottom: "0px"}}>
          <div className="top-border" style={{paddingTop: "15px", paddingBottom: "15px"}}><Dropdown title="NEW CAR" /></div>
          <div className="top-border" style={{paddingTop: "15px", paddingBottom: "15px"}}><Dropdown title="USED CAR" /></div>
          <div className="top-border" style={{paddingTop: "15px", paddingBottom: "15px"}}><Dropdown title="SELL CAR" /></div>
          <div className="top-border" style={{paddingTop: "15px", paddingBottom: "15px"}}>
          <div className="dropdown">
            <button className="dropbtn">
              <Typography variant="button" display="block" gutterBottom>
                COMPARE CAR
              </Typography>
            </button>
          </div>
          </div>
          <div className="top-border" style={{paddingTop: "15px", paddingBottom: "15px"}}><Dropdown title="NEWS & REVIEWS" /></div>
          <div className="top-border" style={{paddingTop: "15px", paddingBottom: "15px"}}><Dropdown title="CARDEKHO VENTURES" /></div>
          <div className="top-border" style={{paddingTop: "15px", paddingBottom: "15px"}}><Dropdown title="MORE" /></div>
        </div>
        <div
          className="header"
          style={{ justifyContent: "flex-end", marginTop: "0px" }}
        >
          <button className="dropbtn" style={{ cursor: "pointer" }}>
            <LocationOnIcon fontSize="medium"></LocationOnIcon>
            <div style={{ paddingTop: "5px" }}>
              <Typography variant="caption" display="block" gutterBottom>
                Select City
              </Typography>
            </div>
          </button>
        </div>
      </div>
      <Divider />
    </div>
  );
}
