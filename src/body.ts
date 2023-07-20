import { githubFetch } from './constants'

async function main() {
  const data = await githubFetch('/markdown', {
    method: 'POST',
    body: {
      text: '# Hello world\n\nThis is a **test**',
    },
  })

  console.log(data)
}

main().catch(console.error)
