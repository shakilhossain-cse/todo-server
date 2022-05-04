require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const port = process.env.PORT | 4000;
const TaskRoute = require('./routes/task.route');


// middleware
app.use(express.json());


// routes
app.use('/api/v1/task',TaskRoute)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server is running on http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start();