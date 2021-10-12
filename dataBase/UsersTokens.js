const { Schema, model } = require('mongoose');

const TokensSchema = new Schema({
    access_token: {
        type: String,
        required: true
    },

    refresh_token: {
        type: String,
        required: true
    },

}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

module.exports = model('Tokens', TokensSchema);
