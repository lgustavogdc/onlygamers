import { AccountRole } from '../../models/account'

export interface HttpResponse<Body = any> {
  statusCode: number
  body: Body
}

export interface HttpRequest<Body = any> {
  headers?: any
  url: string
  body?: Body
  query?: any
  params?: any
  accountId?: string
  accountRole?: AccountRole
}

export interface HttpGet<Response> {
  get: (getParams: Omit<HttpRequest, 'body' | 'accountId' | 'accountRole'>) => Promise<HttpResponse<Response>>
}

export interface HttpPost<Request, Response> {
  post: (getParams: Omit<HttpRequest<Request>, 'accountId' | 'accountRole'>) => Promise<HttpResponse<Response>>
}

export interface HttpDelete {
  delete: (getParams: Omit<HttpRequest, 'body' | 'accountId' | 'accountRole'>) => Promise<HttpResponse>
}

export interface HttpPut<Request, Response> {
  put: (getParams: Omit<HttpRequest<Request>, 'accountId' | 'accountRole'>) => Promise<HttpResponse<Response>>
}

export interface HttpPatch<Request, Response> {
  patch: (getParams: Omit<HttpRequest<Request>, 'accountId' | 'accountRole'>) => Promise<HttpResponse<Response>>
}
