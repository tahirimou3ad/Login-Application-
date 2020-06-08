const User = require('../models/User');
const bcrypt = require('bcryptjs');


exports.sendWelcomePage = (req, res) => {
    res.render('welcome');
};

exports.sendRegistrationPage = (req, res) => {
    res.render('register');
};

exports.sendloginPage = (req, res) => {
    res.render('login');
};

exports.postToRegister = async (req, res) => {
    const registerPost = new User ({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });
    // Hashing password
    registerPost.password = await bcrypt.hash(req.body.password, 10);
    registerPost.save()
                .then(data => {
                    //res.json(data);
                    res.redirect('/login');
                })
                .catch(err => {
                    res.json({ msg : err });
                });
};

exports.postToLogin = async (req, res) => {
    const loginPost = new User ({
        email : req.body.email,
        password : req.body.password
    });
    // Hashing password
    loginPost.password = await bcrypt.hash(req.body.password, 10);
    loginPost.save()
                .then(data => {
                    //res.json(data);
                    res.render('dashboard');
                })
                .catch(err => {
                    res.json({ msg : err });
                });
};

exports.logOut = (req, res) => {
    res.redirect('/');
}