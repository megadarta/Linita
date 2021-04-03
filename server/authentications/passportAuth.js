const passport = require('passport');
const LocalStrategy = require('passport-local');

const passportAuth = (user) => {
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser( async (id, done) => {
        const foundUser = await user.findById(id);

        done(null, foundUser);
    });

    passport.use(new LocalStrategy(
        async (username, password, done) => {
            try {
                const foundUser = await user.findOne({ username });

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