
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');


dotenv.config()
connectDB();
const app = express()

//middlewere
app.use(cors())
app.use(express.json())

app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log('Server Running on port'));

