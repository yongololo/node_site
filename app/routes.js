// exige express
var express = require('express');
var path = require('path');

// crée votre objet routeur
var router = express.Router();

// exporter votre routeur
module.exports = router;

// itinéraire pour notre page d'accueil
router.get('/', function(req, res) {
    res.render('pages/home');
});

// itinéraire pour notre page à propos
router.get('/about', function(req, res) {
    var users = [
        { name: 'Holly', email: 'holly@scotch.io', avatar: 'http://placekitten.com/700/700' },
        { name: 'Chris', email: 'chris@scotch.io', avatar: 'http://placekitten.com/700/700' },
        { name: 'Ado', email: 'Ado@scotch.io', avatar: 'http://placekitten.com/700/700' },
        { name: 'Samantha', email: 'Samantha@scotch.io', avatar: 'http://placekitten.com/700/700' }
    ];

    res.render('pages/about', { users: users });
});

// itinéraire pour notre page contact
router.get('/contact', function(req, res) {
    res.render('pages/contact');
});

router.post('/contact', function(req, res) {
    res.send('Merci de nous avoir contacté, ' + req.body.name + '!We will respond shortly!');
});