import { HttpDelete, HttpGet, HttpPatch, HttpPost, HttpPut, HttpRequest, HttpResponse } from './protocols'
import axios, { AxiosStatic } from 'axios'

export class AxiosAdapterGet<ResponseBody> implements HttpGet<ResponseBody> {
  async get(getParams: Omit<HttpRequest, 'accountId' | 'accountRole' | 'body'>): Promise<HttpResponse<ResponseBody>> {
    const response = await axios.get<ResponseBody>('http://localhost:3000' + getParams.url, { params: getParams.params })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}

export class AxiosAdapterPost<RequestBody, ResponseBody> implements HttpPost<RequestBody, ResponseBody> {
  async post(getParams: Omit<HttpRequest<RequestBody>, 'accountId' | 'accountRole'>): Promise<HttpResponse<ResponseBody>> {
    const response = await axios.post<ResponseBody>(getParams.url, getParams.body, { params: getParams.params })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}

export class AxiosAdapterPut<RequestBody, ResponseBody> implements HttpPut<RequestBody, ResponseBody> {
  async put(getParams: Omit<HttpRequest<RequestBody>, 'accountId' | 'accountRole'>): Promise<HttpResponse<ResponseBody>> {
    const response = await axios.put<ResponseBody>(getParams.url, getParams.body, { params: getParams.params })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}

export class AxiosAdapterDelete implements HttpDelete {
  async delete(getParams: Omit<HttpRequest, 'accountId' | 'accountRole' | 'body'>): Promise<HttpResponse> {
    const response = await axios.delete(getParams.url, { params: getParams.params })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}

export class AxiosAdapterPatch<RequestBody, ResponseBody> implements HttpPatch<RequestBody, ResponseBody> {
  async patch(getParams: Omit<HttpRequest<RequestBody>, 'accountId' | 'accountRole'>): Promise<HttpResponse<ResponseBody>> {
    const response = await axios.patch<ResponseBody>(getParams.url, getParams.body, { params: getParams.params })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}

export default {
  get: AxiosAdapterGet,
  post: AxiosAdapterPost,
  put: AxiosAdapterPut,
  delete: AxiosAdapterDelete,
  patch: AxiosAdapterPatch
}
