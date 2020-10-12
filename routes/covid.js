var express = require('express');
var router = express.Router();
const {covid} = require('../app/controllers')

/* GET users listing. */
router.get('/', covid.getData);

module.exports = router;
