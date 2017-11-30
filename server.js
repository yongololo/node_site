// nécessité de nos dépendances
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;

// utilisation de template ejs et express  pour la mises en page
app.set('view engine', 'ejs');
app.use(expressLayouts);

//  body parser
app.use(bodyParser.urlencoded({ extended: true }));

// route pour notre application
var router = require('./app/routes');
app.use('/', router);


// définir les fichiers statiques (css et images, etc.)
app.use(express.static(__dirname + '/public'));

// démarrage  du serveur
app.listen(port, function() {
    console.log('application démarrée');
});