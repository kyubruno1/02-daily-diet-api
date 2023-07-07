import { app } from './app'
// import { env } from './env'

app
  .listen({ port: 3333 })
  .then(() => console.log(`Server running on port: ${3333}`))
