const { bcryptService, userService, tokenService } = require('../services');
const { statusCodes: { CREATED } } = require('../config');
const { UsersTokens } = require('../dataBase');

module.exports = {

    registerUser: async (req, res, next) => {
        try {
            const { password } = req.body;

            const hashedPassword = await bcryptService.hashPass(password);

            const newUser = await userService.createNewUser({ ...req.body, password: hashedPassword });

            res.status(CREATED).json(newUser);
        } catch (e) {
            next(e);
        }
    },

    loginUser: async (req, res, next) => {
        try {
            const { user, user: { _id }, body } = req;
            // console.log(user.password, 'userPass');
            // console.log(body.password, 'bodyPass');
            await bcryptService.isMatch(user.password, body.password); // (hash, password)

            const tokenPair = tokenService.generateTokenPair();
            // console.log(tokenPair);

            await UsersTokens.create({ ...tokenPair, user: _id });

            res.status(CREATED).json({ ...tokenPair, user });
        } catch (e) {
            next(e);
        }
    },
};
