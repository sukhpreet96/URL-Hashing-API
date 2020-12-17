const express = require('express');
const connectDB = require('./Config/db');

const app = express();

//DB connection
connectDB();

app.use(express.json({ extended: false }));

//Routes
app.use('/', require('./Routes/index'));
app.use('/api/url',require('./Routes/url'));

const PORT = 5000;

app.listen(PORT, ()=> console.log(`Server Running On Port ${PORT}`));


