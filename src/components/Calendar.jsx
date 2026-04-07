import React, { useState } from "react";
import "./Calendar.css";

const Calendar = ({ setSelectedDate, currentDate }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const handleClick = (day) => {
    const selected = new Date(year, month, day);

    setSelectedDate(selected.toDateString()); // 🔥 important

    if (!startDate || (startDate && endDate)) {
        setStartDate(selected);
        setEndDate(null);
    } else {
        if (selected < startDate) {
            setStartDate(selected);
        } else {
            setEndDate(selected);
        }
    }
};

  const isInRange = (day) => {
    const date = new Date(year, month, day);
    return startDate && endDate && date >= startDate && date <= endDate;
  };

  const isStart = (day) => {
    if (!startDate) return false;
    return new Date(year, month, day).toDateString() === startDate.toDateString();
  };

  const isEnd = (day) => {
    if (!endDate) return false;
    return new Date(year, month, day).toDateString() === endDate.toDateString();
  };

  const isToday = (day) => {
    const today = new Date();
    return (
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
    );
  };

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={"empty-" + i}></div>);
  }

  for (let d = 1; d <= totalDays; d++) {
    days.push(
      <div
        key={d}
        className={`day 
            ${isStart(d) ? "start" : ""} 
            ${isEnd(d) ? "end" : ""} 
            ${isInRange(d) ? "range" : ""}
            ${isToday(d) ? "today" : ""}
        `}
        onClick={() => handleClick(d)}
      >
        {d}
      </div>
    );
  }

  
  return (
    <div className="calendar">
        
        {/* Day Names */}
        <div className="day-names">
        {dayNames.map((day) => (
            <div key={day} className="day-name">{day}</div>
        ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid">{days}</div>
    </div>
    );
  
};

export default Calendar;