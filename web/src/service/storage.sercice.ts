enum Keys {
  CONTAINER_ID = "containerId"
}

export default class StorageService {

  public set = {
    containerId: (containerId: string) => sessionStorage.setItem(Keys.CONTAINER_ID, containerId)
  }

  public get = {
    containerId: () => sessionStorage.getItem(Keys.CONTAINER_ID)
  }
}