const router = require("express").Router();
const { Event } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newEvent = await Event.create({
      eventName: req.body.eventName,
      eventDescription: req.body.eventDescription,
      eventDate: req.body.eventDate,
      eventTime: req.body.eventTime,
      eventLocation: req.body.eventLocation,
    });
    res.status(200).json(newEvent);
  } catch (err) {
    res.status(400).json("Could not post new event. Please try again later!");
    return;
  }
});

module.exports = router;
