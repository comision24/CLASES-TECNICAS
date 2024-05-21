const express = require('express');
const router = express.Router();
const {home, form, favorites} = require('../controllers/indexController');


router.get('/', home);
router.get('/formulario', form);
router.get('/favoritas', favorites);


module.exports = router;