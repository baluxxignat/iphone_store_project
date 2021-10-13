const router = require('express').Router();

const { authController } = require('../controllers');
const {
    authMiddleware: {
        validateInfoFromUser,
        searchItemByDynamicParams,
        throwErrorWhenExist
    }
} = require('../middlewares');
const { joiValidateUser: { registrNewUserValidator, loginUserValidator } } = require('../validators');
const { variables: { TRUE, EMAIL } } = require('../config');

router.route('/register')
    .post(
        validateInfoFromUser(registrNewUserValidator),
        searchItemByDynamicParams(EMAIL),
        throwErrorWhenExist(TRUE),
        authController.registerUser
    );

router.route('/login')
    .post(
        validateInfoFromUser(loginUserValidator),
        searchItemByDynamicParams(EMAIL),
        throwErrorWhenExist(),
        authController.loginUser
    );

module.exports = router;
