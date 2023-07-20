import { githubFetch } from './constants'

async function main() {
  const data = await githubFetch('/repos/unjs/ofetch/tags/404', {
    retry: 4,
    onRequest: async () => {
      console.log('requesting...')
    },
    onRequestError: async () => {
      console.log('request error')
    },
  })

  console.log(data)
}

main().catch(console.error)
