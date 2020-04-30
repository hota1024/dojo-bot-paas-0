import { createProbot } from 'probot'
import { findPrivateKey } from 'probot/lib/private-key'

export const startProbot = () => {
  const probot = createProbot({
    id: parseInt(process.env.APP_ID),
    port: parseInt(process.env.PROBOT_PORT),
    webhookProxy: process.env.WEBHOOK_PROXY_URL,
    secret: process.env.WEBHOOK_SECRET,
    cert: findPrivateKey(),
  })

  probot.load((app) => {
    console.log('Probot loaded')

    app.on('push', async (context) => {
      const repo = context.repo()
      console.log(`Recieve push on ${repo.owner}/${repo.repo}`)
    })
  })

  probot.start()
}
