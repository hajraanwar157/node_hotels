const Person = require("./Schema/personschema.js");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
//user authentication using passport package
passport.use(
  new localStrategy(async (username, password, done) => {
    try {
      const user = await Person.findOne({ username: username });
      if (!user) {
        done(null, false, { message: "user not found" });
      }
      const pwd = user.password === password ? true : false;
      if (pwd) {
        done(null, user);
      } else {
        done(null, false, { message: "incorrect password" });
      }
    } catch (error) {
      done(error);
    }
  })
);
module.exports = passport;
