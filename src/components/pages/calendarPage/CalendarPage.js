import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import "./CalendarPage.scss";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const mark = [
    '14-06-2022',
    '23-06-2022',
    '25-06-2022'
]
  const [myVolunteerings, setMyVolunteerings] = useState([]);
  const fetchData = async () => {
    const role = localStorage.getItem("role") || "user";
    const url =
      role === "user"
        ? "http://localhost:8080/volunteering/rv"
        : "http://localhost:8080/volunteering/mv";
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        url,
        {},
        {
          headers: {
            "auth-token": token,
          },
        }
      );
      setMyVolunteerings(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  function formatDate(Idate) {
    const date = new Date(Idate);
    const currentMonth = date.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = date.getDate();
    const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${date.getFullYear()}-${monthString}-${currentDate}`;
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="calendar-page">
      <Header />
      <h1>CALENDAR</h1>
      <div className="calendar-container">
        <div className="calendar-div">          <Calendar onChange={setDate} value={date}/>
</div>
        <div className="text-center">
      Selected date: {date.toDateString()}
   </div>
        <div>
          {myVolunteerings &&
            myVolunteerings.map((item) => (
              <div className="feed-container" key={item.name}>
                <h1>
                  <b>Name: </b>
                  {item.name} | <b>Date: </b>{" "}
                  {formatDate(item.date) !== "NaN-0NaN-NaN"
                    ? formatDate(item.date)
                    : "Unknown Date"}{" "}
                  | <b>Address: </b>
                  {item.address}
                </h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
