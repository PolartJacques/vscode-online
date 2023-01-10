import Docker from 'dockerode';

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
}