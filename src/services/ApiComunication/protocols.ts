import { AccountRole } from '../../models/account'

export interface HttpResponse<T> {
  statusCode: number
  body: T
}

export interface HttpRequest<T> {
  headers?: any
  url: string
  body?: T
  query?: any
  params?: any
  accountId?: string
  accountRole?: AccountRole
}

export interface HttpGet<T> {
  get: (getParams: Omit<HttpRequest<T>, 'body' | 'accountId' | 'accountRole'>) => Promise<HttpResponse<T>>
}

export interface HttpPost<T> {
  post: (getParams: Omit<HttpRequest<T>, 'accountId' | 'accountRole'>) => Promise<HttpResponse<T>>
}

export interface HttpDelete<T> {
  delete: (getParams: Omit<HttpRequest<T>, 'body' | 'accountId' | 'accountRole'>) => Promise<HttpResponse<T>>
}

export interface HttpPut<T> {
  put: (getParams: Omit<HttpRequest<T>, 'accountId' | 'accountRole'>) => Promise<HttpResponse<T>>
}

export interface HttpPatch<T> {
  patch: (getParams: Omit<HttpRequest<T>, 'accountId' | 'accountRole'>) => Promise<HttpResponse<T>>
}
