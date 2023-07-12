const CalendarEvent = require("../models/CalendarEvent");
const { google } = require("googleapis");
const handlebars = require("handlebars");
const fs = require("fs");

const auth = new google.auth.GoogleAuth({
  keyFile: "path/to/credentials.json",
  scopes: ["https://www.googleapis.com/auth/calendar.events"],
});

const calendar = google.calendar({ version: "v3", auth });

const createEvent = async (req, res) => {
  try {
    const { title, description, start, end } = req.body;
    // Create the event in the database using Sequelize
    const createdEvent = await CalendarEvent.create({
      title,
      description,
      start,
      end,
    });
    const googleEvent = {
      summary: title,
      description,
      start: { dateTime: start },
      end: { dateTime: end },
    };

    calendar.events.insert(
      {
        calendarId: "primary",
        requestBody: googleEvent,
      },
      (err, googleRes) => {
        if (err) {
          console.error("Error creating event:", err);
          // Handle error response
        } else {
          console.log("Event created in Google Calendar:", googleRes.data);
          // Handle success response
        }
      }
    );
    return res.status(201).json(createdEvent);
  } catch (err) {
    console.error("Error creating event:", err);
    // Handle error response
  }
};
const calendarTemplateSource = fs.readFileSync(
  "../../views/calendar.handlebars",
  "utf8"
);
const calendarTemplate = handlebars.compile(calendarTemplateSource);

const renderCalendar = async (req, res) => {
  try {
    // Fetch calendar events from the database using Sequelize
    const events = await CalendarEvent.findAll();

    // Render the calendar view using Handlebars and pass the events as data
    const renderedCalendar = calendarTemplate({ events });

    // Send the rendered calendar HTML to the client
    return res.send(renderedCalendar);
  } catch (err) {
    console.error("Error rendering calendar:", err);
    // Handle error response
  }
};

// Other controller actions (update, delete, etc.) follow a similar pattern

module.exports = {
  createEvent,
  renderCalendar,
  // Other controller actions
};
