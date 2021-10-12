module.exports = {
    PORT: process.env.PORT || 5000,
    DATA_BASE_URL: process.env.DATA_BASE_URL || 'mongodb+srv://admin:admin@cluster0.ymlxh.mongodb.net/iphone_store_project?retryWrites=true&w=majority',

    ACCESS_SECRET_WORD: process.env.ACCESS_SECRET_WORD || 'access_secret_word',
    REFRESH_SECRET_WORD: process.env.REFRESH_SECRET_WORD || 'refresh_secret_word',
    TRUE: true,
    EMAIL: 'email'
};
