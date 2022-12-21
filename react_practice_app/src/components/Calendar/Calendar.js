import React, { useState } from 'react';
import CalendarDayScheduleEntry from './CalendarDayScheduleEntry';
import './Calendar.css';

class Calendar extends React.Component {
    
    state = {
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        dateString: '',
        showPopUp: false,
        formData: {}
      }
  
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


  handlePopUpClose = () => {
    this.setState({ showPopUp: false });
  }

  handlePopUpSubmit = (formData) => {
    this.setState({ formData: formData, showPopUp: false });
    console.log(formData)
  }

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
          days.push(<div key={day}>
            <button value={day} className="calendar-cell" key={day} onClick={(e) => this.handleDayClick(e, this.day, this.currentMonth)}> {day}</button> </div>);
          day++;
        }
      }
      rows.push(<div key={i} className="calendar-row">{days}</div>);
      days = [];
    }

    return <div className="calendar-body">{rows}</div>;
  }

  handleDayClick(event) {
    // do something when a day is clicked, such as display an alert or navigate to another page
    let monthNum = `${this.state.currentMonth}`
    let targetClicked = `${event.target.value}`
    let day;

    switch (targetClicked) {
        case '1': {
            day = `${targetClicked}st`
        } break;
        case '2': {
            day = `${targetClicked}nd`
        } break;
        case '3': {
            day = `${targetClicked}d`
        } break;
        case '4': {
            day = `${targetClicked}th`
        } break;
        case '5': {
            day = `${targetClicked}th`
        } break;
        case '6': {
            day = `${targetClicked}th`
        } break;
        case '7': {
            day = `${targetClicked}th`
        } break;
        case '8': {
            day = `${targetClicked}th`
        } break;
        case '9': {
            day = `${targetClicked}th`
        } break;
        case '10': {
            day = `${targetClicked}th`
        } break;
        case '11': {
            day = `${targetClicked}th`
        } break;
        case '12': {
            day = `${targetClicked}th`
        } break;
        case '13': {
            day = `${targetClicked}th`
        } break;
        case '14': {
            day = `${targetClicked}th`
        } break;
        case '15': {
            day = `${targetClicked}th`
        } break;
        case '16': {
            day = `${targetClicked}th`
        } break;
        case '17': {
            day = `${targetClicked}th`
        } break;
        case '18': {
            day = `${targetClicked}th`
        } break;
        case '19': {
            day = `${targetClicked}th`
        } break;
        case '20': {
            day = `${targetClicked}th`
        } break;
        case '21': {
            day = `${targetClicked}st`
        } break;
        case '22': {
            day = `${targetClicked}nd`
        } break;
        case '23': {
            day = `${targetClicked}d`
        } break;
        case '24': {
            day = `${targetClicked}th`
        } break;
        case '25': {
            day = `${targetClicked}th`
        } break;
        case '26': {
            day = `${targetClicked}th`
        } break;
        case '27': {
            day = `${targetClicked}th`
        } break;
        case '28': {
            day = `${targetClicked}th`
        } break;
        case '29': {
            day = `${targetClicked}th`
        } break;
        case '30': {
            day = `${targetClicked}th`
        } break;
        case '31': {
            day = `${targetClicked}st`
        } break;
        default: {
            day = `${targetClicked}`
        }
    }
    
    let date = `${this.months[monthNum]} ${day} ${this.state.currentYear}`

    this.setState({ dateString: date });
    this.setState({ showPopUp: true });
  }

  render() {
    const { showPopUp } = this.state;

    return (
      <div className="center">
        <div className="calendar">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
        </div>
        {showPopUp && (
          <CalendarDayScheduleEntry
            date={this.state.dateString}
            onClose={this.handlePopUpClose}
            onSubmit={this.handlePopUpSubmit}
          />
        )}
      </div>
    );
  }
}

export default Calendar;