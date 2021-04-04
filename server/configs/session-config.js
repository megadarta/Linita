const MongoStore = require('connect-mongo');
const { IS_PROD } = require('./env-config');

const sessionSetting = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
    cookie: { secure: IS_PROD }    
}

module.exports = sessionSetting;