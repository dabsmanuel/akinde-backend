const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

const corsOptions = {
  origin: [
    'http://localhost:3000', 
    'https://akinde-pixels-website-ui.vercel.app',
    // Add more origins as needed
  ],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Routes
const reviewRoutes = require('./routes/reviews');
app.use('/api/reviews', reviewRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});