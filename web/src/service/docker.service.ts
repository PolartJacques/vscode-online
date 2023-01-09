import Api from "./api.service"

const createDockerContainer = async (): Promise<string> => {
  const containerId = await Api.get<string>('/create')
  return containerId
}

export {
  createDockerContainer
}