import { useParams } from "react-router-dom";
import Tour from "../tours/tour/Tour.js";

function TourDetails(props) {
  let { id } = useParams();
  let Info;
  for (let i of props.tour) {
    if (i.id == id) {
      Info = i;
    }
  }
  return (
    <>
      <h4>{Info.name}</h4>
      <p>{Info.info}</p>
    </>
  );
}

export default TourDetails;
