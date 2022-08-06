/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../../header/Header";
import "./CalendarPage.scss";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
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
    const currentMonth = date.getMonth() + 1;
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = date.getDate();
    const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${currentDate}/${monthString}/${date.getFullYear()}`;
  }
  let mySelectedVolunteerings = [];
  let selectedDate= formatDate(date);

  myVolunteerings.map((item) => { 
    if(formatDate(item.date) === selectedDate ) mySelectedVolunteerings.push(item);
  });

  const mark = [
    '14/09/2022',
    '13/07/2022',
    '15/08/2022'
]


  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="calendar-page">
      <Header />
      <h1>CALENDAR</h1>
      <div className="calendar-container">
        <div className="calendar-div">
          {" "}
          <Calendar onChange={setDate} value={date}
 tileClassName={({ dateV }) => {
      if(mark.find(x=>x===formatDate(dateV))){
       return  'highlight'
      }
    }}
/>


            </div>
        <br />
        <div className="text-center">Selected date: {selectedDate}</div>
        <br></br>
        <div className="feed">
          {mySelectedVolunteerings &&
            mySelectedVolunteerings.map((item, index) => (
              <div className="calendar-feed-container" key={index}>
                <span className="calendar-volunteering-name">{item.name} </span>
                <span className="calendar-volunteering-date">
                  {formatDate(item.date) !== "NaN-0NaN-NaN"
                    ? formatDate(item.date)
                    : "Unknown Date"}
                </span>
                <span className="calendar-address">{item.address}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
