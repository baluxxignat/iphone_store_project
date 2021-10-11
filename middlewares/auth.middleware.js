const { ErrorHandler } = require('../errors');
const { statusCodes: { BAD_REQUEST } } = require('../config');

module.exports = {

    validateInfoFromUser_registration: (valid) => (req, res, next) => {
        try {
            const { error } = valid.validate(req.body);

            if (error) {
                throw new ErrorHandler(BAD_REQUEST, error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
