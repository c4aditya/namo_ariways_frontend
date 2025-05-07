import { useLocation, useParams } from "react-router-dom";

function PackageDetail() {
  const { state } = useLocation();
  const { id } = useParams();

  // Agar user direct URL se aaye, to state nahi milegi, isliye fallback bhi bana sakte hain
  if (!state) {
    return <div>Package data not found. Please go back and select a package.</div>;
  }

  return (
    <div style={{padding: "2rem"}}>
      <h2>{state.place}</h2>
      <img src={state.image} alt={state.place} style={{width: 300, borderRadius: 10}}/>
      <p><b>Tours:</b> {state.tours}</p>
      <p><b>Rating:</b> {state.rating}</p>
      <p><b>Package ID:</b> {id}</p>
    </div>
  );
}
export default PackageDetail;
