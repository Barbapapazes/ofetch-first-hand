import { githubFetch } from './constants'

async function main() {
  const data = await githubFetch('/user', {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  })

  console.log(data)
}

main().catch(console.error)
