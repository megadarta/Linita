const User = require('../models/User');
const user = new User();

const passport = require('passport');
require('../authentications/passportAuth')();

class UserController {
    static checkAuthentication = (req, res) => {        
        if(!req.isAuthenticated()) return res.json({ auth: false });

        res.json({ auth: true, user: req.user });
    }

    static register = async (req, res) => {
        const { username, password, email } = req.body;

        const document = {
            username,
            password,
            email
        }

        try {
            const foundUserEmail = await user.getOne({ email });

            if(foundUserEmail) return res.status(401).json({ error: true, message: "Email telah terdaftar, coba daftarkan email yang lain"});

            const foundUserUsername = await user.getOne({ username });

            if(foundUserUsername) return res.status(401).json({ error: true, message: "Username telah terdaftar, coba daftarkan username yang lain"});

            const createdUser = await user.create(document);

            //Save registered user to session
            req.login(createdUser, (err, sessionUser) => {
                if(err) return res.status(500);

                //check authentication
                res.redirect('/');
            });
        } catch(e) {
            res.status(500).json(e);
        }
    }

    static addDetails = async (req, res) => {
        const { fullname, nik } = req.body;
        const userID = req.user._id;

        const updatedUser = await user.addDetails(userID, fullname, nik);

        res.redirect('/');
    }

    static getAuthor = async (req, res) => {
        const { storyID } = req.params;

        const foundAuthor = await user.getOne({ stories: storyID });

        res.json(foundAuthor);
    }

    static getUser = async (req, res) => {
        const { userID } = req.params;

        const foundUser = await user.getOneById(userID);

        res.json(foundUser);
    }

    static logout = async (req, res) => {
        await req.logout();

        //check authentication
        res.redirect('/');
    }

    static authenticateLocal = () => {
        return passport.authenticate('local');
    } 
}

module.exports = UserController;