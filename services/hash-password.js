const bcrypt = require('bcrypt');

module.exports = {

    hashPass: (password) => bcrypt.hash(password, 10)
};
