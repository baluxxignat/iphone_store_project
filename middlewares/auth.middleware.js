const { ErrorHandler } = require('../errors');
const { statusCodes: { BAD_REQUEST } } = require('../config');

module.exports = {

    validateInfoFromUser_registration: (valid) => (req, res, next) => {
        try {
            console.log(req.body, '22222222222');

            const { error } = valid.validate(req.body);
            console.log(req.body, '111111111111111');

            if (error) {
                throw new ErrorHandler(BAD_REQUEST, error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
