import { autor } from "../models/autor.js"; 

class AutorController {

    static listarAutores = (_, res)=>{
        autor.autores.find((err, autores)=>{
            if (err){
                res.status(500).send({message: `failed to get autores: ${err.message}`})
            }
            res.status(200).json(autores)
        })
    }

    static cadastrarAutor = (req, res) =>{
        let newAutor = new autor.autores(req.body);

        newAutor.save((err) => {
            if(err){
                res.status(500).send({message: `failed to save autor: ${err.message}`})
            } else {
                res.status(201).send(newAutor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id

        autor.autores.findByIdAndUpdate(id, {$set: req.body}, (err ) =>{
            if(err){
                res.status(500).send({message: `failed to update: ${err.message}`})
            }else{
                res.status(200).send({message: `autor atualizado com sucesso`})
            }
        })
    }

    static listaAutorPorID = (req, res)=>{
        const id = req.params.id

        autor.autores.findById(id, (err, modelAutor)=> {
            if(err){
                res.status(400).send({message: `failed to get autor: ${err.message}`})
            }else if(modelAutor == null){
                res.status(404).send({message: `failed to get autor: autor not found`})
            }else {
                res.status(200).send(modelAutor)    
            }
        })
    }

    static excluirAutorPorID = (req, res) => {
        const id = req.params.id

        autor.autores.findByIdAndDelete(id, (err)=>{
            if(err){
                res.status(500).send({message: `failed to delete autor: ${err.message}`})
            }else{
                res.status(200).send({message: `autor deleted sucessfully`})
            }
        })
    }
}

export default AutorController