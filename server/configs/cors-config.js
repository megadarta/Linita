const { CLIENT } = require('./env-config');

const corsOption = {
    origin: CLIENT,
    credentials: true
};

module.exports = corsOption;