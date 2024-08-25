// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// POST method endpoint
app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const user_id = '21BEC1429';
  const email = 'devabhakthuni.sasank2021@vitstudent.ac.in';
  const roll_number = '21BEC1429';

  const numbers = [];
  const alphabets = [];
  const highest_lowercase_alphabet = [];

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === 'string') {
      alphabets.push(item);
      if (item === item.toLowerCase() && item >= 'a' && item <= 'z') {
        highest_lowercase_alphabet.push(item);
      }
    }
  });

  // Determine the highest lowercase alphabet
  const maxLowercase = highest_lowercase_alphabet.length > 0 
    ? highest_lowercase_alphabet.reduce((a, b) => (a > b ? a : b)) 
    : null;

  res.json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_lowercase_alphabet: maxLowercase ? [maxLowercase] : [],
  });
});

// GET method endpoint
app.get('/bfhl', (req, res) => {
  res.json({
    operation_code: 1,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});