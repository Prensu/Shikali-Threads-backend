import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

// Load environment variables
dotenv.config()

// App Config
const app = express()
const port = process.env.PORT || 4000

// Connect to DB
connectDB()
connectCloudinary()

// Middlewares 
app.use(express.json())
app.use(cors())

// API endpoint

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})

// Start server
app.listen(port, () => console.log('Server Started on PORT:' + port))