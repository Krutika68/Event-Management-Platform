import React from 'react';

const EventList = ({ events }) => {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
