require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const connectDb = require('./db');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const todoRoutes = require('./routes/todo');
connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send("Todo App");
})
app.use('/api', todoRoutes);

app.listen(port, () => console.log("server is running on port: ", port));