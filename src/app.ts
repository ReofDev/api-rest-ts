import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { router } from './routes'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/v1/', router)

export default app




