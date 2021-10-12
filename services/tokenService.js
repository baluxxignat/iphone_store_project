const jwt = require('jsonwebtoken');
const util = require('util');

const {
    variables: { ACCESS_SECRET_WORD, REFRESH_SECRET_WORD },
    statusCodes: { CODE_401 },
    messages: { INV_TOKEN }
} = require('../config');
const { ErrorHandler } = require('../errors');

const verifyPromise = util.promisify(jwt.verify);

module.exports = {
    generateTokenPair: () => {
        const access_token = jwt.sign({}, ACCESS_SECRET_WORD, { expiresIn: '30d' });
        const refresh_token = jwt.sign({}, REFRESH_SECRET_WORD, { expiresIn: '30d' });

        return {
            access_token,
            refresh_token
        };
    },

    verifyToken: async (token, tokenType = 'access') => {
        try {
            const secretword = tokenType === 'access' ? ACCESS_SECRET_WORD : REFRESH_SECRET_WORD;

            await verifyPromise(token, secretword);
        } catch (e) {
            throw new ErrorHandler(CODE_401, INV_TOKEN);
        }
    }
};
