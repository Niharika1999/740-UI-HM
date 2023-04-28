import React, { useState } from 'react';

function BookTable() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the user's reservation data, such as sending it to a server
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
          <input type="date" id="date" className="form-control" value={date} onChange={(event) => setDate(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" className="form-control" value={time} onChange={(event) => setTime(event.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default BookTable;
