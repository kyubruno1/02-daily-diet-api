import { fastify } from 'fastify'
import { mealsRoutes } from './routes/meals'
import { userRoutes } from './routes/users'
// import cookit from '@fastify/cookie'

export const app = fastify()

app.register(userRoutes, {
  prefix: 'users',
})

app.register(mealsRoutes, {
  prefix: 'meals',
})
