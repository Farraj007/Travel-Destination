import "./App.css";
import Home from "./components/home/Home.js";
import TourDetails from "./components/TourDetails/TourDetails.js"
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js"; 
import tour from "./data/db.json";
import {useState} from 'react'

import { Routes, Route} from "react-router-dom";
function App() {
  const [expand,setExpand]=useState(false)
  function handleExpand(){
    setExpand(!expand)
  }
  return (
    <>
     <div id="header">
        <Header />
      </div>
      <Routes>
        <Route path="/city/:id" element={<TourDetails tour={tour} expand={handleExpand} isExpanded={expand}/>} />
        <Route path="/" element={<Home tour={tour}/>} />
      </Routes>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
