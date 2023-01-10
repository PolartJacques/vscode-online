export default class ApiService {

  baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:8080';
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(this.baseUrl + endpoint);
    const data = await response.json();
    return data;
  }

  async post<T, B>(endpoint: string, body: B): Promise<T> {
    const response = await fetch(this.baseUrl + endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json'},
    });
    const data = await response.json();
    return data;
  }

  async put<T, B>(endpoint: string, body: B): Promise<T> {
    const response = await fetch(this.baseUrl + endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json'},
    });
    const data = await response.json();
    return data;
  }

  async delete<T>(endpoint: string): Promise<T> {
    const response = await fetch(this.baseUrl + endpoint, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  }
}
