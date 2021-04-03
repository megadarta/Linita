const express = require('express');
require('dotenv').config();
const cors = require('cors');
const session = require('express-session');
const sessionSetting = require('./configs/session-config');
const corsOption = require('./configs/cors-config');
const root = require('./routes/root')();
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

//Cors
app.use(cors(corsOption));

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Session
app.use(session(sessionSetting));

app.use(passport.initialize());
app.use(passport.session());

//Routes 
app.use(root);


app.listen(process.env.PORT || 3001, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT || 3001}`);
});