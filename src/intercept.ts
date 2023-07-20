import { githubFetch } from './constants'

async function main() {
  const data = await githubFetch('/repos/unjs/ofetch/tags', {
    query: {
      per_page: 1,
    },
    onRequest: ({ request, options }) => {
      console.log('Request')
    },
    onRequestError: ({ request, options, error }) => {
      console.error('Request error')
    },
    onResponse: ({ request, options, response }) => {
      console.log('Response')
    },
    onResponseError: ({ request, options, response }) => {
      console.error('Response error')
    },
  })

  console.log(data)
}

main().catch(console.error)
