const User = require('../models/User');
const passport = require('passport');
const user = new User();
require('../authentications/passportAuth')(user);

class UserController {
    static async register(req, res) {
        const { body } = req;
        try {
            const encryptedPassword = user.encryptPassword(body.password);

            //edit document's password to the encrypted one
            const insertedDocument = user.editDocument(body, 'password', encryptedPassword);

            const createdUser = await user.save(insertedDocument);

            res.json(createdUser);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    static async login(req, res) {
        res.json(req.user);
    }

    static authenticateLocal() {
        return passport.authenticate('local');
    }
}

module.exports = UserController;