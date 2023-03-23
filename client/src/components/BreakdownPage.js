import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function BreakdownPage({ currentBreakdown }) {
    const [page, setPage] = useState({})

    useEffect(() => {
    fetch(`/breakdowns/${currentBreakdown}`)
        .then((r) => r.json())
        .then((data) => setPage(data))
    }, [currentBreakdown])

    return (
    <div className='card'>
        <img src={page.image} alt='' />
        <p>{page.name}</p>
        <p>{page.phone_number}</p>
        <p>{page.address}</p>
        <p>{page.description}</p>
        <p>{page.car_type}</p>
        {/* <p>{page.responder_id}</p> */}
        <Link to={`/breakdowns/${page.id}/edit`}>
            <button>Edit Breakdown</button>
        </Link>
    </div>
    )
}

export default BreakdownPage
