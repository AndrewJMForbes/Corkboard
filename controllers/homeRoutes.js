const router = require('express').Router();
const { User, Event, Invitation } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
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

router.get('/event/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
      include: [
        {
          all: true,
          nested: true,
        },
        {
          model: User,
          through: Invitation,
          as: "invited_users"
        }
      ]
    });

    console.log(eventData);

    const hostData = await Invitation.findOne({
      where: {
        event_id: req.params.id,
        isHost: true
      }
    });

    const hostUser = await User.findOne({
      where: {
        id: hostData.attendee_id,
      }
    })
    
    const host = hostUser.get({plain: true});

    const event = eventData.get({plain: true});

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
    res.render('browse-events', {
      loggedIn: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    res.render('profile', {
      loggedIn: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
