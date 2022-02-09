import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import connectDB from './config/db'
import typeDefs from './type_define/typeDefs'
import resolvers from './resolvers/resolvers'
import mongoMethods from './static/methods'

const app = express()
const PORT = process.env.PORT || 4000
connectDB()

// The `listen` method launches a web server.

async function startExpressApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers, context: () => ({ mongoMethods }) })
    await server.start()

    server.applyMiddleware({ app })
    app.listen({ port: PORT }, () => {
        console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
    })
}

startExpressApolloServer()
