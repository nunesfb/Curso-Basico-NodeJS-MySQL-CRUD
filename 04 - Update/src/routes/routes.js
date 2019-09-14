const express = require('express');
const UsuarioController = require ('../controllers/usuarioController.js');
const router = express.Router();

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SearchAll);
router.get('/usuarios/:id', UsuarioController.SearchOne);
router.put('/usuarios/:id', UsuarioController.Update);

module.exports = router;