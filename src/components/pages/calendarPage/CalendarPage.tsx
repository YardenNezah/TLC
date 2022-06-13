import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../../footer/Footer'
import Header from '../../header/Header'
import './CalendarPage.scss';

const CalendarPage = () => {

  const [myVolunteerings, setMyVolunteerings] = useState([])

  const fetchData = async () => {
    const role: any = localStorage.getItem("role") || "user"
    const url = role === "user" ? "http://localhost:8080/volunteering/rv" : "http://localhost:8080/volunteering/mv"
    const token: any = localStorage.getItem("token")
    try {
      const res = await axios.post(url, {}, {
        headers: {
          "auth-token": token
        }
      })
      setMyVolunteerings(res.data.result)
    }
    catch(err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div className='calendar-page'>
        <Header />
        <h1>CALENDAR</h1>
        {myVolunteerings && myVolunteerings.map((item: any) =>(
          <div className="feed-container" key={item.name}>
            <h1><b>Name: </b>{item.name} | <b>Date: </b> {item.date} | <b>Address: </b>{item.address}</h1>
          </div>
        ))}
    </div>
  )
}

export default CalendarPage