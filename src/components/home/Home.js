
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Data from "../../data/db.json";
import Tours from "../tours/Tours.js";
import "./Home.css"
export default function Home() {
  return (
    <div className="App">
    <div id="header">
      <Header />
    </div>

    <div id= "inside">
      <Tours data={Data} />
    </div>

    <div id="footer">
      <Footer />
    </div>
  </div>
  )
}

