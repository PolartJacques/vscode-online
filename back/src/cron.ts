import { ContainersManagerService } from './services/containersManager.service';
import DockerService from './services/docker.service';

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;
const dockerService = new DockerService();

const removeUnusedContainer = () => {
  const unusedContainerIds = ContainersManagerService.getUnusedContainersIds();
  unusedContainerIds.forEach((containerId) => dockerService.removeContainer(containerId));
};

setInterval(removeUnusedContainer, FIVE_MINUTES_IN_MS);