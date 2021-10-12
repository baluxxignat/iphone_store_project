const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddleware: { validateInfoFromUser_registration } } = require('../middlewares');
const { joiValidateUser: { registrNewUserValidator, loginUserValidator } } = require('../validators');

router.route('/register')
    .post(
        validateInfoFromUser_registration(registrNewUserValidator),
        authController.registerUser
    );

router.route('/login')
    .post(
        validateInfoFromUser_registration(loginUserValidator),
        authController.loginUser
    );

module.exports = router;
