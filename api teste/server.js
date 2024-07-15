import express from 'express'
import { Router } from './src/routers/router.js'

const app = express()
app.use(express.json())

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

const PORT = 3003;

app.use(router)

app.listen(PORT, ()) => {
  console.log(`Nosso app tá rodando na porta: http://localhost:${PORT}`)
};