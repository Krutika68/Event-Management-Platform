// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Assuming you're using React Router
import EventDashboard from './components/EventDashboard'; // Assuming you have this component
import Login from './components/Login'; // Assuming you have this component
import EventForm from './components/EventForm'; // For event creation
import './App.css'; // Ensure your CSS file is properly imported

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the Event Management Platform</h1>
        <Routes>
          <Route path="/" element={<EventDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-event" element={<EventForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
