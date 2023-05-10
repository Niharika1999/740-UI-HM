import React, { useState } from 'react';

function BookTable() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numGuests, setNumGuests] = useState(0);

  const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in the format yyyy-mm-dd
  const minTime = '11:00';
  const maxTime = '21:00';

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check for empty fields
    if (!name || !email || !phone || !date || !time || !numGuests) {
      alert('Please fill in all fields.');
      return;
    }

    // Validate date and time
    const selectedDate = new Date(date + 'T' + time);
    if (selectedDate < new Date()) {
      alert('Please select a date and time in the future.');
      return;
    }

    // Validate number of guests
    if (numGuests < 1) {
      alert('Number of guests must be at least 1.');
      return;
    }

    // Proceed with submitting the form
    const reservationData = { name, email, phone, date, time, numGuests };
    // Do something with the reservationData, such as sending it to a server
    alert('Form submitted successfully!');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" className="form-control" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" className="form-control" value={date} onChange={(event) => setDate(event.target.value)} min={currentDate} />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" className="form-control" value={time} onChange={(event) => setTime(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="numGuests">Number of Guests:</label>
          <input type="number" id="numGuests" className="form-control" value={numGuests} onChange={(event) => setNumGuests(event.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default BookTable;
