import React, { useState } from 'react';

function CalendarDayScheduleEntry(props) {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
  }

  const handleCancel = (event) => {
    props.onClose()
  }

  return (
    <div className="pop-up center">
      <form id="calendar-schedule-form" onSubmit={handleSubmit}>
      <p className="title">{props.date}</p>
      <div>
        <label className="wide">
          Title:
          <input
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>
        <label>
          Time: 
          <input
            type="time"
            name="time"
            pattern="[0-9]{2}:[0-9]{2} [APap][Mm]"
            onChange={handleChange}
          />
        </label>
        </div>
        <label id="schedule-details-area">
          Description:
          <textarea
            id="schedule-textarea"
            type="textfield"
            name="description"
            onChange={handleChange}
          />
        </label>
        <div>
            <button className="submit-btn" type="submit">Submit</button>
        </div>
        <div>
            <button className="submit-btn" type="button" onClick={handleCancel} >Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CalendarDayScheduleEntry;