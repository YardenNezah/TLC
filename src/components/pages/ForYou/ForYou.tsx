import { useState } from 'react';
import Footer from '../../footer/Footer'
import Header from '../../header/Header'
import VolunteeringGrid from './VolunteeringGrid'

const ForYou = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="page-container">
      <Header />
      <h2>For you</h2>
      <b>based on your keywords</b>
      <div className="categories-div">
        <button onClick={() => setFilter("keywords")} className={`${filter === "keywords" ? 'keywords':'filterLink'}`}>Keywords</button>
      </div>
      <br /> 
       <VolunteeringGrid filter={filter} /> 
    </div>  )
}

export default ForYou