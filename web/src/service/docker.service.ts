import ApiService from './api.service';

export default class DockerService {
  private apiService: ApiService;

  constructor() {
    this.apiService = new ApiService();
  }

  public async createDockerContainer(): Promise<string> {
    const containerId = await this.apiService.get<string>('/create');
    return containerId;
  }
}