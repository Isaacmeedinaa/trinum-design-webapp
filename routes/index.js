var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/home.html', function(req, res, next) {
  res.render('index');
});

router.get('/about.html', function(req, res, next) {
  res.render('about');
});

router.get('/service.html', function(req, res, next) {
  res.render('service');
});

router.get('/contact.html', function(req, res, next) {
  res.render('contact');
});

router.get('/portfolio-details-1.html', function(req, res, next) {
  res.render('portfolio-details-1');
});

router.get('/portfolio-details-2.html', function(req, res, next) {
  res.render('portfolio-details-2');
});

router.get('/portfolio-details-3.html', function(req, res, next) {
  res.render('portfolio-details-3');
});

router.get('/portfolio-details-4.html', function(req, res, next) {
  res.render('portfolio-details-4');
});

router.get('/portfolio-details-5.html', function(req, res, next) {
  res.render('portfolio-details-5');
});

module.exports = router;
