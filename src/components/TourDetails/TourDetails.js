import { useParams } from "react-router-dom";


function TourDetails(props) {
  let { id } = useParams();
  let info;
  
function toggleExpand (){
props.expand()
}  
  info=props.tour.find(a=> a.id === id)
  return (
    <>
    {console.log(info)}
       <h4>{info.name}</h4>
     { props.isExpanded ? <> <p>{info.info}</p> <img src={info.image}/> </>:<p> {info.info.substring(0,250)}... </p>}
     {!props.isExpanded?<button onClick={toggleExpand}>Show More</button>:<button onClick={toggleExpand}>Show Less</button>} 
    </>
  );
}

export default TourDetails;
