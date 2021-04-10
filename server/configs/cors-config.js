const { CLIENT } = require('./env-config');

const corsOption = {
    origin: CLIENT,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
};

module.exports = corsOption;