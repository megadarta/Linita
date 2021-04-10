CLIENT='http://localhost:3000';
IS_PROD=process.env.NODE_ENV === 'production' ? true : false;

module.exports = { CLIENT, IS_PROD };