import express from 'express'
import { dbConnect } from './config/dbConnect.js'
import routes from './routes/index.js'

dbConnect.db.once("open", ()=>{
    console.log(`conexao com banco realizada`)
})

const app = express()
app.use(express.json())
routes(app);
export default app