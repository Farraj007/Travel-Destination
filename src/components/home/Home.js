
// import Header from "../header/Header.js";
// import Footer from "../footer/Footer.js";
// import tour from "../../data/db.json";
import Tours from "../tours/Tours.js";

import "./Home.css"

export default function Home(props) {
  return (
    // <><p>you searhced {count} times</p>
    <div className="App">
     

      <div id="inside">
        <Tours tour={props.tour}/>
      </div>
    </div>
    // </>
  )
}

