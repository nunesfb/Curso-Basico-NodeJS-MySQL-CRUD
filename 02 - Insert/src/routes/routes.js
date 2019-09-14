const express = require('express');
const UsuarioController = require ('../controllers/usuarioController.js');
const router = express.Router();

router.post('/usuarios', UsuarioController.Insert);

module.exports = router;