const { ErrorHandler } = require('../errors');

module.exports = {

    validateInfoFromUser_registration: (valid) => (req, res, next) => {
        try {
            const { error } = valid.validate(req.body);

            if (error) {
                throw new ErrorHandler();
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
