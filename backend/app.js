const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cardRoutes = require('./routes/card');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


// Routes
app.get("/ping", (req, res) => res.send("Server is running!"));
app.use('/cards', cardRoutes);

// coonection to mongodb
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((error)=>{
   console.log('Error connecting to MongoDB', error);
})



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})