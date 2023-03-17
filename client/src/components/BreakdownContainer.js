import { useEffect, useState } from "react";

function BreakdownContainer() {
  const [breakdowns, setBreakdowns] = useState([]);

  useEffect(() => {
    fetch(`/breakdowns`).then((response) => {
      if (response.ok) {
        response.json().then((data) =>
          setBreakdowns(data)
        );
      } else {
        response.json().then((error) =>
          console.log(error)
        );
      }
    });
  }, []);

  return (
    <section className="container">
      <div className="card">
        <p>{breakdowns.length > 0 && breakdowns[0].address}</p>
      </div>
      <div className="card">
        <h2>Breakdowns</h2>
        {breakdowns.map((breakdown) => (
          <div key={breakdown.id}>
            <h3>{breakdown.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BreakdownContainer;
