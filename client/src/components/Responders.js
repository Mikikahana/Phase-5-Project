import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

function Responders() {
  const [responders, setResponders] = useState([]);
  const navigate = useNavigate();

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
    <>
      <button onClick={() => navigate('/')} className='card-button'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </button>
      <section className="responder-container">
        {responders.map((responder) => (
          <div key={responder.id} className="responder-card">
            <div className="responder-card-content">
              <h2>Name: {responder.name}</h2>
              <h3>Distance: {responder.distance} miles away</h3>
              <div className="flex items-center">
                <h3 className="mr-2">Availability:</h3>
                <div className="w-10 h-6 flex items-center rounded-full toggle-button">
                  <div className={`w-1/2 h-full rounded-full ${responder.available ? "bg-green" : "bg-red"} bg-gradient-to-r from-red to-green toggle-button flex-shrink-0 z-10`}></div>
                  <button
                    className={`w-4 h-4 rounded-full m-1 ${responder.available ? "bg-black" : "bg-gray"}`}
                    onClick={() => toggleAvailability(responder)}
                  ></button>
                </div>
              </div>
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
    </>
  );

}

export default Responders;
