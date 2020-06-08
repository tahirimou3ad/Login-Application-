const express = require('express');
const app = express();
const router = require('./controllers/router');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
require('dotenv/config');
//const flash = require('connect-flash');
//const session = require('express-session');

app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use('/', router);
app.set('views', 'views');
app.set('view engine', 'ejs');

// Express session
/*app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

  // Connect flash
app.use(flash());

// Global variables
  app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });*/

// DB connection
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, () => {
    console.log('Connected successfully to DB !');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} ... `);
});