import express from 'express' 
import LivroController from '../controller/livrosController.js'

const router = express.Router()

router
    .get('/livros', LivroController.listarLivros)
    .get('/livros/:id', LivroController.listaLivroPorID)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.excluirLivroPorID)

export default router