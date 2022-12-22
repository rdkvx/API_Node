import mongoose from 'mongoose'

const livroSchema = new mongoose.Schema(
   {
    id : {type: String},
    titulo : {type : String, required: true},
    //os dados do autor estão na tabela 'autores' e será carregado de lá.
    autor : {type : mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
    editora : {type : String, required: true},
    numeroPaginas: {type: Number}
   }
)

const livros = mongoose.model('livros', livroSchema)

export let livro = {
    livros
}