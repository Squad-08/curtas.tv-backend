import express from 'express'
import { createServer } from 'http'

const app = express()
const router = express.Router()

app.use(router)
app.use(express.json())

// routes

const http = createServer(app)

http.listen(3333, () => console.log('Server is running on port 3333.'))
