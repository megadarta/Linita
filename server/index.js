const express = require('express');
require('dotenv').config();
const cors = require('cors');
const session = require('express-session');
const sessionSetting = require('./configs/session-config');
const corsOption = require('./configs/cors-config');
const root = require('./routes/root')();
const story = require('./routes/story')();
const comment = require('./routes/comment')();
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

//Cors
app.use(cors(corsOption));

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Session
app.set('trust proxy', 1);
app.use(session(sessionSetting));

app.use(passport.initialize());
app.use(passport.session());

//Routes 
app.use(root);
app.use('/story', story);
app.use('/comment', comment);

app.listen(process.env.PORT || 3001, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT || 3001}`);
});