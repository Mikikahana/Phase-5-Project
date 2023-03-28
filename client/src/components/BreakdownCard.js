import React from 'react'
import { useNavigate} from 'react-router-dom'


function BreakdownCard({breakdown, setCurrentBreakdown, onDeleteBreakdown}) {
  const { id } = breakdown
  const navigate = useNavigate();

  function handleClick()
  {
      setCurrentBreakdown(id)
      navigate(`/breakdowns/${id}`);
  }

  function handleDelete(id) {
    fetch(`/breakdowns/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteBreakdown(id); // Call the function to update breakdowns state variable
      }
    });
  }

  return (
    <div class='breakdown-card'>
      <div class='breakdown-card-content'>
        <p>Name: {breakdown.name} </p>
        <p>Description: {breakdown.description}</p>
        <p>Car Type: {breakdown.car_type}</p>
        <div class='card-button-container'>
        <button class='card-button' onClick={handleClick}>View</button>
        <button class='card-button' onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default BreakdownCard