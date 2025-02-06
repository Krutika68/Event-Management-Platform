const express = require('express');
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, eventController.createEvent);
router.get('/', eventController.getEvents);

module.exports = router;
