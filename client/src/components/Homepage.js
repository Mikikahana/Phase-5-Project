import React from 'react'
import {Link} from 'react-router-dom'
import BreakdownContainer from './BreakdownContainer'

function Homepage({setCurrentBreakdown, currentUser}) {
  return (
    <div>
      <BreakdownContainer setCurrentBreakdown={setCurrentBreakdown}/>
      {currentUser && <button>
        <Link to="/breakdowns/new">
          Add Breakdown
        </Link>
      </button>}
    </div>
  )
}

export default Homepage