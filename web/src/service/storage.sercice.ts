enum Keys {
  CONTAINER_ID = "containerId"
}

const set = {
  containerId: (containerId: string) => sessionStorage.setItem(Keys.CONTAINER_ID, containerId)
}

const get = {
  containerId: () => sessionStorage.getItem(Keys.CONTAINER_ID)
}

const StorageService = {
  get,
  set
}

export default StorageService