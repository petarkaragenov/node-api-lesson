const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/post')
const app = express()

dotenv.config()

// Connect to db
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => {
        console.log('connected to DB')
})

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// import routes
app.use('/api/user', authRoutes)
app.use('/api/posts', postRoutes)

app.listen(5000, () => console.log('Listening on port 5000'))