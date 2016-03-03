var express = require('express');
var router = express.Router();
var pg = require('pg');


router.get('/cars', function(req, res, next) {
  res.render('cars/index', {});
});

router.get('/cars/new', function(req, res, next) {
  res.render('cars/new', {});
});

router.post('/cars', function(req, res, next) {
  res.redirect('cars/index', {});
});

router.get('/cars/:id', function(req, res, next) {
  res.render('cars/show', { carId: req.params.id });
});

router.get('/cars/:id/edit', function(req, res, next) {
  res.render('cars/edit', { carId: req.params.id });
});

router.post('/cars/:id', function(req, res, next) {
  res.redirect('cars/index', {});
});

router.delete('/cars/:id/delete', function(req, res, next) {
  res.redirect('cars/index', {});
});

module.exports = router;
