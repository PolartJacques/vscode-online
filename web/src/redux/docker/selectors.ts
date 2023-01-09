import { RootState } from "../store"

type DockerState = RootState["docker"]

export const containerIdSelector = (state: RootState): DockerState["containerId"] => state.docker.containerId
export const hasContainerSelector = (state: RootState): boolean => Boolean(state.docker.containerId)