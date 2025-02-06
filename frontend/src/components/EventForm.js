// src/components/EventForm.js
import React from 'react';

const EventForm = () => {
  return (
    <div>
      <h2>Create Event</h2>
      <form>
        <label>Event Name:</label>
        <input type="text" />
        <br />
        <label>Event Date:</label>
        <input type="date" />
        <br />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
