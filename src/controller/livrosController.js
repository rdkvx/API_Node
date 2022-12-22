import { livro } from "../models/Livro.js"; 

class LivroController {

    static listarLivros = (_, res)=>{
        livro.livros.find()
            //populate é o join do mongo.
            .populate('autor')
            //exec é para executar a query
            .exec((err, livros)=>{
            if (err){
                res.status(500).send({message: `failed to get livros: ${err.message}`})
            }else{
                res.status(200).json(livros)
            }
        })
    }

    static listaLivroPorID = (req, res)=>{
        const id = req.params.id

        livro.livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, modelLivro)=> {
            if(err){
                res.status(400).send({message: `failed to get livro: ${err.message}`})
            }else if(modelLivro == null){
                res.status(404).send({message: `failed to get livro: livro not found`})
            }else {
                res.status(200).send(modelLivro)    
            }
        })
    }

    static cadastrarLivro = (req, res) =>{
        let newLivro = new livro.livros(req.body);

        newLivro.save((err) => {
            if(err){
                res.status(500).send({message: `failed to save livro: ${err.message}`})
            } else {
                res.status(201).send(newLivro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id

        livro.livros.findByIdAndUpdate(id, {$set: req.body}, (err ) =>{
            if(err){
                res.status(500).send({message: `failed to update: ${err.message}`})
            }else{
                res.status(200).send({message: `Livro atualizado com sucesso`})
            }
        })
    }

    static excluirLivroPorID = (req, res) => {
        const id = req.params.id

        livro.livros.findByIdAndDelete(id, (err)=>{
            if(err){
                res.status(500).send({message: `failed to delete livro: ${err.message}`})
            }else{
                res.status(200).send({message: `livro deleted sucessfully`})
            }
        })
    }
}

export default LivroController