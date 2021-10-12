const { ErrorHandler } = require('../errors');
const {
    statusCodes: { BAD_REQUEST, NOT_FOUND, CONFLICT },
    messages: { MESSAGE_NOT_FOUND, ALREADY_EXIST }
} = require('../config');
const { User } = require('../dataBase');

module.exports = {

    validateInfoFromUser: (valid) => (req, res, next) => {
        try {
            const { error } = valid.validate(req.body);

            if (error) {
                throw new ErrorHandler(BAD_REQUEST, error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    searchItemByDynamicParams: (param, searchIn = 'body', fieldKey = param) => async (req, res, next) => {
        try {
            // example: req.body.email
            const value = req[searchIn][param];

            req.user = await User.findOne({ [fieldKey]: value });

            next();
        } catch (e) {
            next(e);
        }
    },

    throwErrorWhenExist: (emailWasFounded = false) => (req, res, next) => {
        try {
            const { user } = req;
            if (user && emailWasFounded) {
                return next(new ErrorHandler(CONFLICT, ALREADY_EXIST));
            }

            if (!user && !emailWasFounded) {
                return next(new ErrorHandler(NOT_FOUND, MESSAGE_NOT_FOUND));
            }

            next();
        } catch (e) {
            next(e);
        }
    },
};
