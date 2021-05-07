import express from 'express'
import cors from 'cors'
import { createServer } from 'http'

import './database'
import { handleError } from './helpers/error'
import { routes } from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use((err, req, res, next) => {
    handleError(err, res);
})

const http = createServer(app)

export { http }
