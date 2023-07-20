import { githubFetch } from './constants'

async function main() {
  const data = await githubFetch('/repos/unjs/ofetch/tags')

  console.log(data)
}

main().catch(console.error)
