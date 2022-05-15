import React, { Fragment } from 'react'
import Footer from '../../footer/Footer'
import Header from '../../header/Header'
import './CalendarPage.scss';
import Calendar from 'react-calendar';

const CalendarPage = () => {
  return (
    <div className='calendar-page'>
        <Header />
        <h1>CALENDAR</h1>
        <Calendar />
        <Footer />
    </div>
  )
}

export default CalendarPage