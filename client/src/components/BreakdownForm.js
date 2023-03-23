import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

function BreakdownForm({addBreakdown,currentUser}) {
  console.log(currentUser)
  const [formData, setFormData] = useState({
    name:'',
    address:'',
    phone_number:'',
    image:'',
    description:'',
    car_type:'',
  })
  const [errors, setErrors] = useState([])
  const navigate = useNavigate ();

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function onSubmit(e) {
    e.preventDefault();

    const data = {
      ...formData,
      dispatcher_id: currentUser.id, // include the current user's ID
    };

    fetch('/breakdowns', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => {
      if (res.ok) {
        res.json().then(addBreakdown);
        navigate('/');
      } else {
        //Display errors
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)));
      }
    });
  }

    return (
      <div className='card'>
        <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} />

        <label>Address</label>
        <input type='text' name='address' value={formData.address} onChange={handleChange} />

        <label>Phone Number</label>
        <input type='text' name='phone_number' value={formData.phone_number} onChange={handleChange} />

        <label>Image</label>
        <input type='text' name='image' value={formData.image} onChange={handleChange} />

        <label>Description</label>
        <input type='text' name='description' value={formData.description} onChange={handleChange} />

        <label>Car Type</label>
        <input type='text' name='car_type' value={formData.car_type} onChange={handleChange} />

        <button>Add New Breakdown</button>
      </form>
      </div>
    )
  }
  export default BreakdownForm