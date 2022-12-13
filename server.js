import app from './src/app.js'

// primeiro tenta atribuir o valor da porta do processo, se não conseguir, atribui a padrão 8080
const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log(`Servidor escutando na porta em http://localhost:${port}`)
})
