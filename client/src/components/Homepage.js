import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import BreakdownCard from "./BreakdownCard.js";

function Homepage({ setCurrentBreakdown, currentUser }) {
  const [breakdowns, setBreakdowns] = useState([]);

  useEffect(() => {
    fetch(`/breakdowns`).then((r) => {
      if (r.ok) {
        r.json().then((data) =>
          setBreakdowns(data)
        );
      } else {
        r.json().then((error) =>
          console.log(error)
        );
      }
    });
  }, []);

  function handleDeleteBreakdown(id) {
    setBreakdowns((breakdowns) =>
      breakdowns.filter((breakdown) => breakdown.id !== id)
    );
  }

  const mappedBreakdowns = breakdowns.map((breakdown) =>
  (
    <BreakdownCard
      key={breakdown.id}
      breakdown={breakdown}
      setCurrentBreakdown={setCurrentBreakdown}
      onDeleteBreakdown={handleDeleteBreakdown} // Pass the function to update breakdowns state variable
    />
  ))

  return (
    <div className="breakdown-wrapper">
      <section className="breakdown-container">
        {mappedBreakdowns}
      </section>
      <div className="add-button">
        {currentUser && <button>
          <Link to="/breakdowns/new">
            Add Breakdown
          </Link>
        </button>}
      </div>
    </div>
  );
}


export default Homepage;
