const passport = require('passport');
const LocalStrategy = require('passport-local');

const passportAuth = (user) => {
    const UserModel = user.getModel();

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser( async (id, done) => {
        const foundUser = await UserModel.findById(id);

        done(null, foundUser);
    });

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {

                const foundUser = await UserModel.findOne({ email });
                
                if(!foundUser) return done(null, false);

                //check if password is correct
                const validPassowrd = user.comparePassword(password, foundUser.password);

                if(!validPassowrd) return done(null, false);

                return done(null, foundUser);
            } catch(e) {
                return done(e);
            }

        }
    ));
}

module.exports = passportAuth;