// Defines the main routes for the website

var express = require('express');
var router = express.Router();

// GET default route / - treated as Home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// GET /home - Home page
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// GET /about - About Me page
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

// GET /projects - Projects page
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

// GET /contact - Contact Me page
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

// Export router for use in app.js
module.exports = router;