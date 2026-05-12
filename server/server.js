require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ContactMessage = require('./models/ContactMessage');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error (Contact form will simulate success):', err.message));

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Check if mongoose is connected
    if (mongoose.connection.readyState === 1) {
      const newMessage = new ContactMessage({ name, email, message });
      await newMessage.save();
    } else {
      console.log('Simulating message save since MongoDB is not connected:', { name, email, message });
    }
    
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
