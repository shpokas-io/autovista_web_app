import { useParams } from "react-router-dom";

function CarDetailsPage() {
  const { id } = useParams();
  return <h1>Car Details for ID: {id}</h1>;
}

export default CarDetailsPage;
