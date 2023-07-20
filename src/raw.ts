import { githubFetch } from './constants'

async function main() {
  const response = await githubFetch.raw('/repos/unjs/ofetch/tags')

  console.log(response)
}

main().catch(console.error)
