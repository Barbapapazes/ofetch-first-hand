import { ofetch } from 'ofetch'

export const GITHUB_API_BASE_URL = 'https://api.github.com'

export const githubFetch = ofetch.create({ baseURL: GITHUB_API_BASE_URL })
