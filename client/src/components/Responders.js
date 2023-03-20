import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

function Responders() {
    const [responders, setResponders] = useState([]);

    useEffect(() => {
    fetch(`/responders`).then((r) => {
        if (r.ok) {
        r.json().then((data) =>
            setResponders(data)
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
        {responders.map((responder) => (
        <div key={responder.id} className="card">
          {/* <Link to={`/responders/${responder.id}`}> */}
            <div>
                <h2>Name: </h2>{responder.name}
                <h3>Distance: {responder.distance} miles away</h3>
                {/* <h3>Available: {responder.available}</h3> */}
            </div>
          {/* </Link> */}
        </div>
        ))}
    </section>
    );
}

export default Responders;
