const API_URL = "http://localhost:8080"

async function get<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`)
  return await response.json()
}

const Api = {
  get
}

export default Api
