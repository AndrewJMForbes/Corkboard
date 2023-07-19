const router = require('express').Router();
const { User, Event, Invitation } = require('../models');
const withAuth = require('../utils/auth');
const dayjs = require("dayjs");

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/calendar', async (req, res) => {
  try {
    res.render('calendar', {
      loggedIn: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/new-event', async (req, res) => {
  try {
    res.render('event-form', {
      loggedIn: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/meet-team', async (req, res) => {
  try {
    res.render('meet-the-team', {
      loggedIn: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/search-results', async (req, res) => {
  try {
    res.render('search-results', {
      loggedIn: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/event/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
      include: [
        {
          model: User,
          through: Invitation,
          as: "invited_users"
        }
      ]
    });

    const hostData = await Invitation.findOne({
      where: {
        event_id: req.params.id,
        isHost: true
      }
    });

    const hostUser = await User.findOne({
      where: {
        id: hostData.user_id,
      }
    })
    
    const host = hostUser.get({plain: true});

    const event = eventData.get({plain: true});

    console.log(event);

    res.render('event', {
      host,
      event,
      loggedIn: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/browse-events', async (req, res) => {
  try {
    const publicEventData = await Event.findAll();

    const publicEvents = publicEventData.map(data => data.get({plain: true}));

    res.render('browse-events', {
      events: publicEvents,
      loggedIn: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile/:id', async (req, res) => {
  
  try {
    const userData = await User.findByPk(req.params.id);
    const user = userData.get({plain: true});

    const eventsData = await Event.findAll();
    console.log("EVENTS", eventsData)
    const eventsRaw = eventsData.map(event => event.get({plain: true}));
    const events = eventsRaw.map(event => ({title: event.eventName, start: dayjs(event.eventDate).format("YYYY-MM-DD") , url: `/event/${event.id}`}))
    

    res.render('profile', {
      user,
      events,
      loggedIn: req.session.logged_in,
      events: JSON.stringify(events)
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
