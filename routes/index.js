var express = require('express');
var router = express.Router();
const {index,processLogin, loggout, mensaje} = require('../controllers/indexController')
const indexValidator = require('../validations/indexValidator')

/* GET home page. */
router
    .get('/', index)
    .post('/',indexValidator,processLogin)
    .get('/mensaje', mensaje)
    .get('/loggout', loggout)



module.exports = router;
