const { User } = require('../dataBase');

module.exports = {
    createNewUser: (user) => User.create(user)
};
