import express from 'express';

const router = express.Router();
const messages = [];

// Get all messages
router.get('/', (req, res) => {
  res.json(messages);
});

// Add a new message
router.post('/', (req, res) => {
  const { user, message } = req.body;
  messages.push({ user, message, timestamp: new Date() });
  res.status(201).json({ message: 'Message added' });
});

export default router;
