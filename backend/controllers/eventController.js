const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  const { name, description, date, category } = req.body;
  const event = new Event({
    name,
    description,
    date,
    category,
    owner: req.user.id,
  });

  try {
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: 'Error creating event' });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching events' });
  }
};
