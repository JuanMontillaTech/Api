const express = require('express');
const router = express.Router(); 
const usuarioController= require('../controllers/usuarioController');
 
 //Api Usuario
router.get('/usuario/', usuarioController.list);
router.post('/usuario/create',usuarioController.create);
router.get('/usuario/delete/:id',usuarioController.delete);
router.get('/usuario/update/:id',usuarioController.select);
router.post('/usuario/update/:id',usuarioController.update);
 



module.exports = router;