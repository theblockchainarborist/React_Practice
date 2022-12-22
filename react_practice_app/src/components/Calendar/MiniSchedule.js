import React, { useState } from 'react';
import './MiniSchedule.css';

function MiniSchedule({style, thisScheduleData, date}) {
  let schedule = thisScheduleData;
  console.table("Schedule data " + schedule.name)
  const standardTime = militaryTimeToStandard(schedule.time);

  return (
    <div id="mini-schedule-div" className="mini" style={style}>
      <p className="schedule-date">{date}</p>
      <p id="test-data" className="schedule-name">{schedule.name}</p>
      <p className="schedule-time">{standardTime}</p>
      <p className="schedule-description">{schedule.description}</p>
    </div>
  );
}

function ScheduleList({ scheduleData, style, date }) {
  return (
    <div className="MiniSchedule mini-border" style={style}>
      {scheduleData.map(schedule => (
        
        <MiniSchedule
        key={schedule.id}
          style={style}
          thisScheduleData={schedule}
          date={date}
        />

      ))}
    </div>
  );
}

function militaryTimeToStandard(militaryTime) {
  // Split the military time into hours and minutes
  const [hours, minutes] = militaryTime.split(':');

  // Convert the hours to standard time format
  let standardHours = hours;
  let ampm = 'AM';
  if (hours > 12) {
    standardHours = hours - 12;
    ampm = 'PM';
  } else if (hours === '12') {
    ampm = 'PM';
  } else if (hours === '00') {
    standardHours = '12';
  }

  // Return the standard time string
  return `${standardHours}:${minutes} ${ampm}`;
}

export default ScheduleList;