/* eslint-disable jsx-a11y/alt-text */
import "./Tours.css";
function Tours(props) {
  return (
<>
    {
   props.data.map(a=>{
        return (
            <>
            <p id="nameOfTheCity">Tour Name : {a.name}</p>
            <img src= {a.image}/>
            </>
        );
    })
    
}
</>
);
  
}
export default Tours
