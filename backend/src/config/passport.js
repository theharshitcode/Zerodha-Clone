const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const Auth = require("../models/AuthModel");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback"
        },

        async (
            accessToken,
            refreshToken,
            profile,
            done
        ) => {
            try {

                const email =
                    profile.emails[0].value;

                let user =
                    await Auth.findOne({
                        email
                    });

                // Existing User
                if (user) {
                    return done(
                        null,
                        user
                    );
                }

                // New User
                user =
                    await Auth.create({
                        username:
                            profile.displayName,

                        email,

                        googleId:
                            profile.id,

                        provider:
                            "google",

                        isVerified:
                            true,

                        password:
                            "GOOGLE_AUTH"
                    });

                return done(
                    null,
                    user
                );

            } catch (error) {
                return done(
                    error,
                    null
                );
            }
        }
    )
);

module.exports = passport;