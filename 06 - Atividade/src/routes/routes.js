const express = require('express');
const LivroController = require ('../controllers/LivroController.js');
const router = express.Router();

router.post('/livros', LivroController.Insert);
router.get('/livros', LivroController.SearchAll);
router.get('/livros/:id', LivroController.SearchOne);
router.put('/livros/:id', LivroController.Update);
router.delete('/livros/:id', LivroController.Delete);

module.exports = router;