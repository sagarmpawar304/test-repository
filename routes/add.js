var express = require('express');
var router = express.Router();

router.post('/add', function(req, res, next) {
  const {number1, number2} = req.body;
  const num1 = parseInt(number1);
  const num2 = parseInt(number2);
  res.status(200).json({sum: num1 + num2})
});

module.exports = router;