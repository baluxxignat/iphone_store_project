const Joi = require('joi');
const { userRolesEnum, regex: { EMAIL_REGEX, PASSWORD_REGEX } } = require('../config');

const emailShema = Joi.string().regex(EMAIL_REGEX).required().trim();
const passwordShema = Joi.string().regex(PASSWORD_REGEX).required().trim();

const registrNewUserValidator = Joi.object({
    email: emailShema,
    password: passwordShema,
    role: Joi.string().allow(...Object.values(userRolesEnum))
});

const loginUserValidator = Joi.object({
    email: emailShema,
    password: passwordShema
});

module.exports = {
    registrNewUserValidator,
    loginUserValidator
};
