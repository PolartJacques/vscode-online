import express from 'express'
import DockerService from './services/dockerode/dockerode.service'
import cors from 'cors'

const PORT = 8080
const dockerService = new DockerService()

const app = express()
app.use(cors())

app.get('/', async (_req, res) => {
  res.json("hello world")
})

app.get('/create', async (_req, res) => {
  const container = await dockerService.createNodeContainer()
  res.json(container.id)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})