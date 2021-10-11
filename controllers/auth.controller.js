const { hashPassword, userService } = require('../services');

module.exports = {

    loginUser: (req, res, next) => {
        try {
            // const {} = req.body;
        } catch (e) {
            next(e);
        }
    },

    registerUser: async (req, res, next) => {
        try {
            const { password } = req.body;
            console.log(req.body, 'hhhhhhhhhhhhhh');

            const hashedPassword = hashPassword.hashPass(password);

            const newUser = await userService.createNewUser({ ...req.body, password: hashedPassword });

            console.log(newUser);
        } catch (e) {
            next(e);
        }
    }
};
