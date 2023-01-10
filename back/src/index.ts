import express from 'express';
import DockerService from './services/docker.service';
import cors from 'cors';
import { ContainersManagerService } from './services/containersManager.service';
import './cron';

const PORT = 8080;
const dockerService = new DockerService();

const app = express();
app.use(cors());

app.get('/', async (_req, res) => {
  res.json('hello world');
});

app.get('/create', async (_req, res) => {
  const container = await dockerService.createNodeContainer();
  if (!container) {
    res.status(500).send();
    return;
  }
  ContainersManagerService.markContainerAsUsed(container.id, Date.now());
  res.json(container.id);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});