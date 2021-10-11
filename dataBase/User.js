const { Schema, model } = require('mongoose');
const { userRolesEnum } = require('../config');

const userShema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

    role: {
        type: String,
        trim: true,
        default: userRolesEnum.USER,
        enum: Object.values(userRolesEnum)
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

module.exports = model('User', userShema);
