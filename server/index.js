const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const multer = require('multer')
const studentRoutes = require('./routes/studentRoutes');

const csvRoutes = require('./routes/csvRoutes')

const app = express();
const dbVar = process.env.DB_VAR;
app.use(cors());
app.use(express.json());
mongoose.connect(dbVar).then(() => {
  console.log('DB Connected');
}).catch((err) => {
  console.error('DB Connection Error:', err);
});





// Routes
app.use('/api', studentRoutes);
app.use('/api', csvRoutes);


// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running`);
});

app.get('/', (req, res) => {
  res.status(200).json({ message: "Working Properly" });
});



