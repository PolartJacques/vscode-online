import Docker from 'dockerode'

const docker = new Docker()

const createNodeContainer = async (): Promise<Docker.Container> => {
  const container = await docker.createContainer({
    Image: 'node:latest',
    AttachStdin: false,
    AttachStdout: true,
    AttachStderr: true,
    Tty: true,
    Cmd: ['bash'],
    OpenStdin: true,
    StdinOnce: false,
  })
  await container.start()
  return container
}

export { createNodeContainer }