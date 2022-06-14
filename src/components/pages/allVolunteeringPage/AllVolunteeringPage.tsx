import { useState } from 'react';
import Footer from '../../footer/Footer'
import Header from '../../header/Header'
import VolunteeringGrid from './VolunteeringGrid'

const AllVolunteeringPage = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="page-container">
      <Header />
      <h2>Volunteering</h2>  
      <div className="categories-div">
        <button onClick={() => setFilter("all")} className={`${filter === "all" ? 'all':'filterLink'}`}>All</button>
        <button onClick={() => setFilter("today")} className={`${filter === "today" ? 'today':'filterLink'}`}>Today</button>        
        <button onClick={() => setFilter("tommorrow")} className={`${filter === "tommorrow" ? 'tommorrow':'filterLink'}`}>Tommorrow</button>
        <button onClick={() => setFilter("foryou")} className={`${filter === "foryou" ? 'foryou':'filterLink'}`}>For You</button>
      </div>
      <br /> 
       <VolunteeringGrid filter={filter} /> 
    </div>  )
}

export default AllVolunteeringPage