import express from 'express'
import { createNodeContainer } from './services/dockerode/dockerode.service'
import cors from 'cors'

const PORT = 8080

const app = express()
app.use(cors())

app.get('/', async (req, res) => {
  res.json("hello world")
})

app.get('/create', async (req, res) => {
  const container = await createNodeContainer()
  res.json(container.id)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})