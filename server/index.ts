import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import { ApolloServer } from 'apollo-server-express'
import { resolvers } from './graphql/resolvers'
import { typeDefs } from './graphql/types'

const run = async () => {
  // webpack
  const config = require(path.join(__dirname, '../webpack.config.js'))
  const compiler = webpack(config)
  const app = express()

  // apollo
  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()
  server.applyMiddleware({ app })

  app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler, { log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000 }))

  app.listen(4000)
}

run()
