import express, { json } from 'express'
require('dotenv').config()
const morgan = require('morgan')
import cors from 'cors'
import './dbConnect'
// express app
const app = express()

// Middlewares
const corsConfig = {
  origin: true,
  credentials: true,
}
app.use(cors(corsConfig))
app.options('*', cors(corsConfig))
app.use(json({ limit: '5mb' }))
app.use(morgan('dev'))

// port
const port = process.env.PORT || 8000
app.get('/', (req, res) => res.send('Hello!'))
app.listen(port, () => console.log(`Server is running at port ${port}.`))
