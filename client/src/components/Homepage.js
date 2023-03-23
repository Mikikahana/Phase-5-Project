import React from 'react'
import {Link} from 'react-router-dom'
import BreakdownContainer from './BreakdownContainer'
// import BreakdownForm from './BreakdownForm'

function Homepage({setCurrentBreakdown, currentUser}) {
  return (
    <div>
      <BreakdownContainer setCurrentBreakdown={setCurrentBreakdown}/>
      {/* <BreakdownForm/> */}
      {currentUser && <button>
        <Link to="/breakdowns/new">
          Add Breakdown
        </Link>
      </button>}
    </div>
  )
}

export default Homepage