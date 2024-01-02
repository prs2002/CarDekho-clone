import React from 'react'
import CarsGroups from './components/CarsGroups/CarsGroups'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import NewTech from './components/NewTech/NewTech'
import SliderPage from './components/Slider/SliderPage'
import {DATA, DATA1, DATA2} from './data/Data'

export default function App() {
  return (
    <div className="main-page">
      <Navbar/>
      <SliderPage/>
      <NewTech/>
      <CarsGroups title="The most searched cars" data={DATA}/>
      <CarsGroups title="Trusted used cars by budget" data = {DATA1}/>
      <CarsGroups title="Latest Cars" data={DATA2}/>
      <Footer/>
    </div>
  )
}