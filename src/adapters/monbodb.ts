import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const LOGMSG = '⚡️[Paketá Credito Live-Coding BoilerPlate]:'

mongoose.connect(
    process.env.MONGO_URL || 'mongodb://localhost:27017/local',
    {},
    err => {
        const msg = err
            ? `${LOGMSG} Failed to connect to MongoDB: ${err}`
            : `${LOGMSG} MongoDB connection established successfully`
        console.log(msg)
    },
)

export default mongoose;