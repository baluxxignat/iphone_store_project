const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const { variables: { PORT, DATA_BASE_URL } } = require('./config');
const { authRouter } = require('./routes');

const app = express();

// MongoDB CONNECTION
async function start() {
    try {
        await mongoose.connect(DATA_BASE_URL);
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}
start();

// Routes
app.get('/ping', (req, res) => res.json('Pong'));
app.use('/auth', authRouter);
