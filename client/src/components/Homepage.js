import React from 'react'
import {Link} from 'react-router-dom'
import BreakdownContainer from './BreakdownContainer'
import BreakdownForm from './BreakdownForm'

function Homepage({setCurrentBreakdown}) {
  return (
    <>
    <div>
      <BreakdownContainer setCurrentBreakdown={setCurrentBreakdown}/>
      {/* <BreakdownForm/> */}
    </div>
    <Link to={"/breakdowns/new"}>
    <button>Add Breakdown</button>
    </Link>
    </>
  )
}

export default Homepage