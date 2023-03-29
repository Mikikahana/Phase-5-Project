import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function BreakdownEditForm({ updateBreakdown }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone_number: '',
    description: '',
    car_type: '',
    dispatcher_id: '',
  })
  const [errors, setErrors] = useState([])
  const navigate = useNavigate();

  const { id } = useParams()
  useEffect(() => {
    fetch(`/breakdowns/${id}`)
      .then(res => res.json())
      .then(res => setFormData(res))
  }, [])

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
    <>
      <button onClick={() => navigate('/breakdowns/:id')} className='card-button'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </button>
      <div className='form-container'>
        <div className='form-card'>
          <div className='form-content'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <input type='text' name='name' value={formData.name} onChange={handleChange} className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Name" />

              <input type='text' name='address' value={formData.address} onChange={handleChange} className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Address" />

              <input type='text' name='phone_number' value={formData.phone_number} onChange={handleChange} className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Phone Number" />

              <input type='text' name='description' value={formData.description} onChange={handleChange} className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Description" />

              <input type='text' name='image' value={formData.image} onChange={handleChange} className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Image URL" />
              {formData.image && <img src={formData.image} alt='Preview' className='max-w-sm rounded' />}

              <input type='text' name='car_type' value={formData.car_type} onChange={handleChange} className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Car Type" />

              <button className='card-button'>Update Breakdown</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );

}

export default BreakdownEditForm
