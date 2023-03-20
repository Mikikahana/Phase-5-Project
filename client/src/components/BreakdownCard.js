import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BreakdownCard({ id }) {
  const [breakdown, setBreakdown] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    fetch(`/breakdowns/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setBreakdown(data);
        });
      } else {
        r.json().then((err) =>
          console.log(err)
        );
      }
    });
  }, [id]);

  function handleDelete(id) {
    fetch(`/breakdowns/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setBreakdown((breakdown) =>
        breakdown.filter((breakdown) => breakdown.id !== id));
      };
    });
  }

  function handleEdit() {
    setShowEditForm(true);
  }

  function handleCloseEdit() {
    setShowEditForm(false);
  }

  return (
    <section className="container">
      <div className="card">
        <h2>Breakdown Details</h2>
        <h3>{breakdown.name}</h3>
        <h3>Phone Number: {breakdown.phone_number}</h3>
        <p>{breakdown.address}</p>
        <p>
          <img src={breakdown.image} alt=""/>
        </p>
        <p>{breakdown.description}</p>
        <p>{breakdown.car_type}</p>
        <button onClick={handleEdit}>
          Edit Breakdown
        </button>
        <button onClick={() => handleDelete(breakdown.id)}>Delete</button>
      </div>

      {showEditForm && (
        <div className="edit-form">
          {/* TODO: render edit form with prior data */}
          <button onClick={handleCloseEdit}>Cancel</button>
        </div>
      )}
    </section>
  );
}

export default BreakdownCard;