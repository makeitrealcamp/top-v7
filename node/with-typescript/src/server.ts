import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { connect } from './db'
import userRouter from './routes'

dotenv.config()
const port = process.env.PORT || 8000
const app = express()
connect()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
