import { useState } from 'react';
import Header from '../../header/Header'
import VolunteeringGrid from './VolunteeringGrid'

const AllVolunteeringPage = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="page-container all-volunteeering-container">
      <Header />
      <h2>Volunteer Now</h2>  
      <div className="categories-div">
        <button onClick={() => setFilter("all")} className={`${filter === "all" ? 'all':'filterLink'}`}>All</button>
        <button onClick={() => setFilter("today")} className={`${filter === "today" ? 'today':'filterLink'}`}>Today</button>        
        <button onClick={() => setFilter("tommorrow")} className={`${filter === "tommorrow" ? 'tommorrow':'filterLink'}`}>Tommorrow</button>
        <button onClick={() => setFilter("foryou")} className={`${filter === "foryou" ? 'foryou':'filterLink'}`}>For You</button>
      </div>
      <div className='nav-li-volunteering'>
        <div>Name</div>
        <div className='date-li'>Date</div>
        <div className='address-li'>Address</div>
        <div className='button-li'>Sign Up</div>
      </div>
       <VolunteeringGrid filter={filter} /> 
    </div>  )
}

export default AllVolunteeringPage