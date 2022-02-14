/* eslint-disable jsx-a11y/alt-text */

function Tour(props) {
  return (
   <>
     <p id="nameOfTheCity">Tour Name : {props.tour.name}</p>
      <img src= {props.tour.image}/>

   </>
    )}

export default Tour
