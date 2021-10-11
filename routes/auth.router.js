const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddleware: { validateInfoFromUser_registration } } = require('../middlewares');
const { joiValidateUser: { registrNewUserValidator } } = require('../validators');

router.route('/')
    .post(
        validateInfoFromUser_registration(registrNewUserValidator),
        authController.registerUser
    );

module.exports = router;
