const router = require("express").Router();
const { Event, Invitation } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const eventTime12HrFormat = convertTo12HrFormat(req.body.eventTime);
    const newEvent = await Event.create({
      eventName: req.body.eventName,
      eventDescription: req.body.eventDescription,
      eventDate: req.body.eventDate,
      eventTime: eventTime12HrFormat, // Use the converted time
      eventLocation: req.body.eventLocation,
    });
    console.log("I'M TRYING!!!", req.session.user_id);

    const today = new Date();
    const dateString = today.toLocaleDateString();
    const hostInvitation = await Invitation.create({
      invitationStatus: "Going",
      invitationDate: dateString,
      event_id: newEvent.id,
      user_id: req.session.user_id,
      isHost: true,
    });

    res.status(200).json(newEvent);
  } catch (err) {
    console.log(err);
    res.status(400).json("Could not post new event. Please try again later!");
    return;
  }
});

// Function to convert time to 12-hour format
function convertTo12HrFormat(time) {
  const [hours, minutes] = time.split(":");
  let period = "AM";

  if (hours >= 12) {
    period = "PM";
  }

  const hoursIn12HrFormat = hours % 12 || 12;
  return `${hoursIn12HrFormat}:${minutes} ${period}`;
}

module.exports = router;
