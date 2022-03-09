import express from 'express'
import routes from '../routes'

import * as dotenv from 'dotenv'
dotenv.config()

const HOST = process.env.HOST || 'https://localhost'
const PORT = process.env.PORT || 8000
const LOGMSG = '⚡️[Paketá Credito Live-Coding BoilerPlate]:'

const app = express()
app.use(express.json())
app.use('/', routes)
app.listen(PORT, () => {
    console.log(`${LOGMSG} Server is running at ${HOST}:${PORT}`)
})

export default app;
