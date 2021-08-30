import { HttpDelete, HttpGet, HttpPatch, HttpPost, HttpPut, HttpRequest, HttpResponse } from './protocols'
import axios, { AxiosStatic } from 'axios'

export class AxiosAdapter<T> implements HttpPost<T>, HttpGet<T>, HttpPatch<T>, HttpDelete<T>, HttpPut<T> {
  private readonly axios: AxiosStatic

  constructor() {
    this.axios = axios
  }

  async get(getParams: Omit<HttpRequest<T>, 'accountId' | 'accountRole' | 'body'>): Promise<HttpResponse<T>> {
    const response = await this.axios.get<T>('http://localhost:3000' + getParams.url, { params: getParams.params })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }

  async post(getParams: Omit<HttpRequest<T>, 'accountId' | 'accountRole'>): Promise<HttpResponse<T>> {
    const response = await this.axios.post<T>(getParams.url, getParams.body, { params: getParams.params })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }

  async put(getParams: Omit<HttpRequest<T>, 'accountId' | 'accountRole'>): Promise<HttpResponse<T>> {
    const response = await this.axios.put<T>(getParams.url, getParams.body, { params: getParams.params })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }

  async delete(getParams: Omit<HttpRequest<T>, 'accountId' | 'accountRole' | 'body'>): Promise<HttpResponse<T>> {
    const response = await this.axios.delete(getParams.url, { params: getParams.params })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }

  async patch(getParams: Omit<HttpRequest<T>, 'accountId' | 'accountRole'>): Promise<HttpResponse<T>> {
    const response = await this.axios.patch<T>(getParams.url, getParams.body, { params: getParams.params })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}
