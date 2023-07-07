import { FastifyInstance } from 'fastify'

export async function userRoutes(app: FastifyInstance) {
  app.get('/', () => {
    console.log('Rota de usuários')
  })
}
