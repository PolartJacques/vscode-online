const TIME_BEFORE_MARK_AS_UNUSED_IN_MS = 30 * 60 * 1000;

class ContainersManagerService {
  private static instance: ContainersManagerService;
  private containers: Map<string, number> = new Map();

  static getInstance(): ContainersManagerService {
    if (!ContainersManagerService.instance) {
      ContainersManagerService.instance = new ContainersManagerService();
    }
    return ContainersManagerService.instance;
  }

  markContainerAsUsed(id: string, timestamp: number): void {
    this.containers.set(id, timestamp);
  }

  removeContainer(id: string): void {
    this.containers.delete(id);
  }

  getUnusedContainersIds(): string[] {
    const minLastUsedDate = Date.now() - TIME_BEFORE_MARK_AS_UNUSED_IN_MS;
    const expiredIds = Array.from(this.containers.entries())
      .filter(([_id, timestamp]) => timestamp < minLastUsedDate)
      .map(([id, _timestamp]) => id);
    return expiredIds;
  }
}

const containersManagerServiceInstance = ContainersManagerService.getInstance();

export {
  containersManagerServiceInstance as ContainersManagerService
};