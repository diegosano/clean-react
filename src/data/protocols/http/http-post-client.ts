import { HttpResponse } from './http-response'

export interface HttpPostParams {
  url: string
  body?: object
}

export interface HttpPostClient {
  post: (params: HttpPostParams) => Promise<HttpResponse>
}
