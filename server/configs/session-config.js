const MongoStore = require('connect-mongo');

const sessionSetting = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
    cookie: { secure: false }    
}

module.exports = sessionSetting;