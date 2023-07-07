import { FastifyInstance } from 'fastify'

export async function mealsRoutes(app: FastifyInstance) {
  app.get('/', () => {
    console.log('Rota das refeições')
  })
}
