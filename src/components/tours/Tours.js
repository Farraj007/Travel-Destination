/* eslint-disable jsx-a11y/alt-text */
import "./Tours.css";
import Tour from './tour/Tour.js'
import {Link} from 'react-router-dom'

function Tours(props) {

return (
    <>
        {
       props.tour.map(a=>{
            return (
                <Link to = {`/city/${a.id}`} ><Tour tour={a} key={a.id}/></Link>
            );
        })
 
    }
    </>
    );
      
    }
    export default Tours
   
    