import express from 'express'
import path from 'path'
import links from './routes/links'

const server = express()

server.use(express.json())
server.use('/api/v1/links', links)
server.use(express.static(path.join(__dirname, 'public')))

export default server
