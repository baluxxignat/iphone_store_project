const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddleware: { validateInfoFromUser_registration } } = require('../middlewares');

router.route('/')
    .post(
        validateInfoFromUser_registration,
        authController.registerUser
    );
