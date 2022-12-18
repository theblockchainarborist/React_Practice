import React from 'react';
import './Calendar.css';

class Calendar extends React.Component {
  state = {
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear()
  }

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  renderHeader() {
    const { currentMonth, currentYear } = this.state;
    return (
      <div className="calendar-header">
        <button onClick={(e) => this.changeMonth(-1)}>{'<'}</button>
        <div>{`${this.months[currentMonth]} ${currentYear}`}</div>
        <button onClick={(e) => this.changeMonth(1)}>{'>'}</button>
      </div>
    );
  }

  changeMonth(numMonths) {
    const { currentMonth, currentYear } = this.state;
    let newMonth = currentMonth + numMonths;
    let newYear = currentYear;
    if (newMonth < 0) {
      newYear -= Math.ceil(Math.abs(newMonth) / 12);
      newMonth = 12 - Math.abs(newMonth) % 12;
      if (newMonth === 12) {
        newMonth = 0;
        newYear += 1;
      }
    } else {
      newYear += Math.floor(newMonth / 12);
      newMonth = newMonth % 12;
    }
    this.setState({ currentMonth: newMonth, currentYear: newYear });
  }

  renderDays() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="calendar-days">
        {days.map(day => (
          <div key={day} className="calendar-day">{day}</div>
        ))}
      </div>
    );
  }

  renderCells() {
    const { currentMonth, currentYear } = this.state;
    const monthStart = new Date(currentYear, currentMonth, 1);
    const monthEnd = new Date(currentYear, currentMonth + 1, 0);
    const startDay = monthStart.getDay();
    const endDay = monthEnd.getDate();

    const rows = [];
    let days = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startDay) {
          days.push(<div key={`empty-${i}-${j}`} className="calendar-empty">{''}</div>);
        } else if (day > endDay) {
          break;
        } else {
          days.push(<div key={day} className="calendar-cell">{day}</div>);
          day++;
        }
      }
      rows.push(<div key={i} className="calendar-row">{days}</div>);
      days = [];
    }

    return <div className="calendar-body">{rows}</div>;
  }

  render() {
    return (
    <div class="center">
        <div className="calendar">
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
        </div>
      </div>
    );
  }
}

export default Calendar;