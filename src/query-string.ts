import { githubFetch } from './constants'

async function main() {
  const data = await githubFetch('/repos/unjs/ofetch/tags', {
    query: {
      per_page: 2,
    },
  })

  console.log(data)
}

main().catch(console.error)
