const express = require('express'),
          Menu = require('../models/menu');

const router = express.Router();

router.post('/', function (req, res) {
  var menu = new Menu(req.body);
  menu.save(function(err) {
    res.send(menu);
  });
});

router.get('/', function(req, res) {
  Menu.find({}, function(err, menus) {
    res.json(menus);
  });
});

router.get('/:id', function(req, res) {
  Menu.findById(req.params.id, function (err, menu) {
    res.json(menu);
  });
});

router.patch('/:id', function(req, res) {
  Menu.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true }, function (err, menu) {
    res.json(menu);
  });
});

router.delete('/:id', function(req, res) {
  Menu.findOneAndRemove({ _id: req.params.id}, function (err, menu) {
    res.json(true);
  });
});

module.exports = router;
