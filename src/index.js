import express from 'express'
import { createServer } from 'http'

import './database'
import { handleError } from './helpers/error'

const app = express()
const router = express.Router()
const PORT = process.env.PORT || 3333

app.use(router)
app.use(express.json())

// routes

app.use((err, req, res, next) => {
    handleError(err, res);
})

const http = createServer(app)

http.listen(PORT, () => console.log('Server is running on port 3333.'))
