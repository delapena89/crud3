var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pet = require('../models/pets');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get all pets
router.get('/pets', function(req, res, next) {
  Pet.find(function(err, data) {
    if(err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});

// post all pet
router.post('/pets', function(req, res, next) {
  newPet =new Pet({
    name: req.body.name,
    type: req.body.type,
    age: req.body.age
  });
  newPet.save(function(err, data) {
    if (err) {
      res.json ({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});

// get single pet
router.get('/pet/:id', function(req, res, next) {
  Pet.findById(req.params.id,function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});













module.exports = router;
