const { hashPassword, userService } = require('../services');
const { statusCodes: { CREATED } } = require('../config');

module.exports = {

    registerUser: async (req, res, next) => {
        try {
            const { password } = req.body;

            const hashedPassword = await hashPassword.hashPass(password);

            const newUser = await userService.createNewUser({ ...req.body, password: hashedPassword });

            res.status(CREATED).json(newUser);
        } catch (e) {
            next(e);
        }
    },

    loginUser: (req, res, next) => {
        try {
            // const {} = req.body;
        } catch (e) {
            next(e);
        }
    },
};
