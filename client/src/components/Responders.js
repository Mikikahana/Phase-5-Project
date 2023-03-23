import { useEffect, useState } from "react";

function Responders() {
  const [responders, setResponders] = useState([]);

  useEffect(() => {
    fetch(`/responders`).then((r) => {
      if (r.ok) {
        r.json().then((data) => setResponders(data));
      } else {
        r.json().then((error) => console.log(error));
      }
    });
  }, []);

  const toggleAvailability = (responder) => {
    const updatedResponder = { ...responder, available: !responder.available };
    fetch(`/responders/${responder.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedResponder),
    })
      .then((r) => r.json())
      .then((data) => {
        const updatedResponders = responders.map((r) =>
          r.id === data.id ? data : r
        );
        setResponders(updatedResponders);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="container">
      {responders.map((responder) => (
        <div key={responder.id} className="card">
          <div>
            <h2>Name: {responder.name}</h2>
            <h3>Distance: {responder.distance} miles away</h3>
            <h3>Availability:{" "}
              {responder.available ? "Available" : "Not available"}
            </h3>
            <button onClick={() => toggleAvailability(responder)}>
              Toggle Availability
            </button>
            {responder.breakdowns && (
              <>
                <h3>Breakdowns:</h3>
                <>
                {responder.breakdowns.map((breakdown) => (
                  <li key={breakdown.id}>
                    {breakdown.name}: {breakdown.id}
                  </li>
                ))}
                </>
              </>
            )}
          </div>
        </div>
      ))}
    </section>
    );
}

export default Responders;
