import React, { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function BreakdownEditForm({updateBreakdown}) {
  const [formData, setFormData] = useState({
    name:'',
    address:'',
    phone_number:'',
    description:'',
    car_type:'',
    dispatcher_id:'',
  })
  const [errors, setErrors] = useState([])
  const navigate = useNavigate();

  const {id} = useParams()
  useEffect(() => {
    fetch(`/breakdowns/${id}`)
    .then(res => res.json())
    .then(res => setFormData(res))
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }


function handleSubmit(e) {
  e.preventDefault();
  // PATCH to `/Breakdowns/${id}`
  fetch(`/breakdowns/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
    .then(res => {
      if (res.ok) {
        res.json().then(updateBreakdown);
        // Redirect to updated page
        navigate(`/breakdowns/${id}`);
      } else {
        // Display errors
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)));
      }
    });
}

    return (
      <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Name </label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} />

        <label> Address</label>
        <input type='text' name='address' value={formData.address} onChange={handleChange} />

        <label>Phone Number</label>
        <input type='text' name='phone_number' value={formData.phone_number} onChange={handleChange} />

        <label>Description</label>
        <input type='text' name='description' value={formData.description} onChange={handleChange} />

        <label>Image</label>
        <input type='text' name='image' value={formData.image} onChange={handleChange} />

        <label>Car Type</label>
        <input type='text' name='car_type' value={formData.car_type} onChange={handleChange} />

        <button>Update Breakdown</button>
        </form>
      </div>
    )
  }

  export default BreakdownEditForm
