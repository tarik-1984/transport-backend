const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Example booking endpoint
app.post('/booking', (req, res) => {
  const { name, pickup, dropoff, phonenumber, time, date } = req.body;

  console.log('New booking:', name, pickup, dropoff, phonenumber, time, date);

  // Here, send an email or SMS using Twilio/SendGrid
  res.status(200).send('Booking received!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
