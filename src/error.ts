import { githubFetch } from './constants'

async function main() {
  try {
    const data = await githubFetch('/repos/unjs/ofetch-404/tags')

    console.log(data)
  }
  catch (error) {
    console.error(error.data)
  }
}

main().catch(console.error)
