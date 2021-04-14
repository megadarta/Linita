const User = require('../models/User');
const passport = require('passport');
const user = new User();
require('../authentications/passportAuth')(user);

class UserController {
    static checkAuthentication = (req, res) => {        
        if(!req.isAuthenticated()) return res.json({ auth: false });

        res.json({ auth: true, user: req.user });
    }

    static register = async (req, res) => {
        const { body } = req;

        try {
            const createdUser = await user.register(body);

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