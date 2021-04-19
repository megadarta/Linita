<<<<<<< HEAD
CLIENT='https://linita-unity.netlify.app/';
=======
>>>>>>> 0270d1b3997bf2325b7139e4a8b4d0ee4cf3f880
IS_PROD=process.env.NODE_ENV === 'production' ? true : false;
CLIENT=['https://linita-unity.netlify.app', 'http://localhost:3000'];

module.exports = { CLIENT, IS_PROD };