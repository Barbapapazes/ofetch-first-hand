import { ofetch } from 'ofetch'

async function main() {
  const data = await ofetch('https://api.github.com/repos/unjs/ofetch', { method: 'POST' })

  console.log(data)
}

main().catch(console.error)
