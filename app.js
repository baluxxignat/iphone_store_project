const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const {
    variables: { PORT, DATA_BASE_URL },
    statusCodes: { NOT_FOUND, INTERNAL_SERVER_ERROR },
    messages: { MESSAGE_NOT_FOUND }
} = require('./config');
const { authRouter } = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ====== MongoDB CONNECTION
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
// ==============

// Routes
app.get('/ping', (req, res) => res.json('Pong'));
app.use('/auth', authRouter);

/* -----------------ERROR HANDLER------------------------------ */
app.use('*', _notFoundError);
app.use(_mainErrorHandler);

function _notFoundError(err, req, res, next) {
    next({
        status: err.status || NOT_FOUND,
        message: err.message || MESSAGE_NOT_FOUND
    });
}

// eslint-disable-next-line no-unused-vars
function _mainErrorHandler(err, req, res, next) {
    res
        .status(err.status || INTERNAL_SERVER_ERROR)
        .json({
            message: err.message
        });
}
/* -------------------------------------------------------------- */
