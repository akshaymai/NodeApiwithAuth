// var GoogleStrategy = require('passport-google-oauth20').Strategy;
// // AIzaSyApXBAtFzbiBU3ohVFms14YzHJLVge53_c
// passport.use(new GoogleStrategy({
//     clientID: AIzaSyApXBAtFzbiB,
//     clientSecret: AIzaSyApXBAtFzbiBU3ohVFms14YzHJLVge53_c,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));