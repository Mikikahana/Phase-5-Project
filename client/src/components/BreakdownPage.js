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
        <>
            <Link to='/'>
                <button className='card-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>

                </button>
            </Link>
            <div className='page-container'>
                <div className='page-card'>
                    <div className='page-card-content'>
                        <img class='border-4 border-double bg-green rounded-lg' src={page.image} alt='' style={{ maxWidth: '300px', maxHeight: '300px' }} />
                        <div className="item-grid">
                            <p>{page.name}</p>
                            <p>{page.phone_number}</p>
                            <p>{page.address}</p>
                            <p>{page.description}</p>
                            <p>{page.car_type}</p>
                        </div>
                        <Link to={`/breakdowns/${page.id}/edit`}>
                            <button className='card-button'>Edit Breakdown</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default BreakdownPage
