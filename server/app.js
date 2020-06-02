var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const crypto = require('crypto');

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*let authorized = true

function checkAuth(req, res, next) {
  if (authorized) {
    next()
  } else {
    res.status(403).send('Unauthorized!')
    return
  }
}
app.use('/', checkAuth)*/

// Instagram OAuth 2 setup
const credentials = {
  client: {
    id: 550046499039084, // Change this!
    secret: 'bffcbe0912d7d4e3e53c2be5825f678a', // Change this!
  },
  auth: {
    tokenHost: 'https://api.instagram.com',
    tokenPath: '/oauth/access_token'
  }
 };
 const oauth2 = require('simple-oauth2').create(credentials);

 app.get('/redirect', (req, res) => {
  // Generate a random state verification cookie.
  const state = req.cookies.state || crypto.randomBytes(20).toString('hex');
  // Allow unsecure cookies on localhost.
  const secureCookie = req.get('host').indexOf('localhost:') !== 0;
  res.cookie('state', state.toString(), {maxAge: 3600000, secure: secureCookie, httpOnly: true});
  const redirectUri = oauth2.authorizationCode.authorizeURL({
    redirect_uri: `${req.protocol}://${req.get('host')}/instagram-callback`,
    scope: 'basic',
    state: state
  });
  res.redirect(redirectUri);
});

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

module.exports = app;