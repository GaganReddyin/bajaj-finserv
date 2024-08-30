// api/bfhl.js

const cors = require('cors');               

const handler = (req, res) => {
  if (req.method === 'POST') {
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

    const maxLowercase = highest_lowercase_alphabet.length > 0
      ? highest_lowercase_alphabet.reduce((a, b) => (a > b ? a : b))
      : null;

    return res.status(200).json({
      is_success: true,
      user_id,
      email,
      roll_number,
      numbers,
      alphabets,
      highest_lowercase_alphabet: maxLowercase ? [maxLowercase] : [],
    });
  } else if (req.method === 'GET') {
    return res.status(200).json({
      operation_code: 1,
    });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default cors()(handler);
