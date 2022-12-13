const http = require("http")
const port = 8080

const rotas = {
    '/' : 'Curso de Node',
    '/livros' : 'Entrei na pagina de livros',
    '/autores' : 'Entrei na pagina de autores'
}

const server  = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
})

server.listen(port, ()=>{
    console.log(`Servidor escutando na porta em http://localhost${port}`)
})
