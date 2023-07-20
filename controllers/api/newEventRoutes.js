const router = require("express").Router();
const { Event, Invitation } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newEvent = await Event.create({
      eventName: req.body.eventName,
      eventDescription: req.body.eventDescription,
      eventDate: req.body.eventDate,
      eventTime: req.body.eventTime,
      eventLocation: req.body.eventLocation,
    });
    console.log("I'M TRYING!!!", req.session.user_id);

    const today = new Date();
    const dateString = today.toLocaleDateString();
    const hostInvitation =  await Invitation.create({
      invitationStatus: 'Going',
      invitationDate: dateString,
      event_id: newEvent.id,
      user_id: req.session.user_id,
      isHost: true
    });
    
    res.status(200).json(newEvent);
  } catch (err) {
    console.log(err);
    res.status(400).json("Could not post new event. Please try again later!");
    return;
  }
});


module.exports = router;
