import express from 'express' 
import AutorController from '../controller/autoresController.js'

const router = express.Router()

router
    .get('/autor', AutorController.listarAutores)
    .get('/autor/:id', AutorController.listaAutorPorID)
    .post('/autor', AutorController.cadastrarAutor)
    .put('/autor/:id', AutorController.atualizarAutor)
    .delete('/autor/:id', AutorController.excluirAutorPorID)

export default router