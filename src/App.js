import React from 'react';
import './App.css';
import MonthlyCalendar from "./month/MonthlyCalender";
import backgroundImage from "./images/timestub.png";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h1>Calendar</h1>
        <div className="CalendarContainer">
          <MonthlyCalendar />
        </div>
      </div>
    </div>
  );
}

export default App;