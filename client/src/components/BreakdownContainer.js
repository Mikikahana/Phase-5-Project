import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BreakdownCard from "./BreakdownCard.js";

function BreakdownContainer() {
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

  return (
    <section className="container">
      {breakdowns.map((breakdown) => (
        <div key={breakdown.id} className="card">
          {/* <Link to={`/breakdowns/${breakdown.id}`}> */}
            <div>
              {/* <h1>Name: {breakdown.name}</h1>
              <h3>Description: {breakdown.description}</h3> */}
          <BreakdownCard id={breakdown.id} />
            </div>
          {/* </Link> */}
        </div>
      ))}
    </section>
  );
}

export default BreakdownContainer;
