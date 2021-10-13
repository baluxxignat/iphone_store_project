const bcrypt = require('bcrypt');
const { statusCodes: { BAD_REQUEST }, messages: { EMAIL_OR_PASS_WRONG } } = require('../config');
const { ErrorHandler } = require('../errors');

module.exports = {

    hashPass: (password) => bcrypt.hash(password, 10),

    isMatch: async (hash, password) => {
        const isPasswordMatched = await bcrypt.compare(password, hash);

        if (!isPasswordMatched) {
            throw new ErrorHandler(BAD_REQUEST, EMAIL_OR_PASS_WRONG);
        }
    }
};
