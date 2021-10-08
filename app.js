const express = require('express');
const { variables: { PORT } } = require('./config');

require('dotenv').config();

const app = express();

app.get('/ping', (req, res) => res.json('Pong'));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
