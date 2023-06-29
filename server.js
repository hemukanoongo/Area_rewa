const express = require('express');
const path = require('path');
const axios = require('axios');
const btoa = require('btoa');
const cors = require('cors');

const username = 'arearealestate';
const password = 'DNwYnF2spxsHQ54U';

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/call', async (req, res) => {
  res.send('call API');
});

app.get('/token', async (req, res) => {
  try {
    const response = await axios.get('https://move-api.inhabit.com.au/v1/0/listinglist', {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    });

    // Extract the token from the response
    const token = response.headers['your_token_header_key'];
    console.log(response.headers);
    // res.json({ token });
    res.send(response.data);
    console.log(response.data);
  } catch (error) {
    console.error('Error generating token:', error);
    res.status(500).json({ error: 'Failed to generate token' });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});