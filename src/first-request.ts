import { ofetch } from 'ofetch'
import type { Repository } from './types'

async function main() {
  const data = await ofetch<Repository>('https://api.github.com/repos/unjs/ofetch')

  console.log(data.stargazers_count)
  console.log(data)
}

main().catch(console.error)
