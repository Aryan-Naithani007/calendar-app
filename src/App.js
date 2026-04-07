import React, { useState } from "react";
import Calendar from "./components/Calendar";
import Notes from "./components/Notes";
import "./App.css";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };
  
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="container">
      {/* LEFT PANEL */}
      <div className="left">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="calendar"
        />

        <div className="bottom">
          <div className="date-text">
            <span className="year">
              {currentDate.getFullYear()}
            </span>
            <h2>
              {currentDate.toLocaleString("default", { month: "long" })}
            </h2>
          </div>

          <div className="nav-buttons">
            <button onClick={prevMonth}>{"<"}</button>
            <button onClick={nextMonth}>{">"}</button>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right">
        <Calendar 
          currentDate={currentDate}
          setSelectedDate={setSelectedDate} 
        />
        <Notes selectedDate={selectedDate} />
      </div>
    </div>
  );
}

export default App;