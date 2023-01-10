import Docker from 'dockerode';
import { ContainersManagerService } from '../containersManager.service';

export default class DockerService {
  docker: Docker;

  constructor() {
    this.docker = new Docker();
  }

  public async createNodeContainer(): Promise<Docker.Container> {
    const container = await this.docker.createContainer({
      Image: 'node:latest',
      AttachStdin: false,
      AttachStdout: true,
      AttachStderr: true,
      Tty: true,
      Cmd: ['bash'],
      OpenStdin: true,
      StdinOnce: false,
    });
    await container.start();
    return container;
  }

  public async removeContainer(containerId: string): Promise<void> {
    const container = this.docker.getContainer(containerId);
    try {
      await container.stop();
      await container.remove();
      ContainersManagerService.removeContainer(containerId);
    } catch(error) {
      console.error(`DockerService > removeContainer : container ${containerId} could't be stoped`);
      console.error(error);
    }
  }
}