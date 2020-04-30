import next from 'next'
import express, { Request, Response } from 'express'
import { cors } from './middleware/cors'

export const startNextApp = () => {
  const port = parseInt(process.env.PORT ?? '3000')
  const dev = process.env.NODE_ENV !== 'production'

  const app = next({ dev })
  const handle = app.getRequestHandler()

  app.prepare().then(() => {
    const server = express()

    server.get('*', (req: Request, res: Response) => {
      return handle(req, res)
    })

    server.use(cors)

    server.listen(port, (error?: Error) => {
      if (error) throw error
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
}
