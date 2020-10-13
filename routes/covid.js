var express = require('express');
var router = express.Router();
const {covid} = require('../app/controllers')

/* GET users listing. */
router.get('/', covid.getData);
router.get('/countries', covid.generateCountry)
router.get('/countries/list', covid.getCountry)
router.get('/summary/:id', covid.getSummaryCase)
// router.get('/death/:code', covid.getTotalDeath)

module.exports = router;
