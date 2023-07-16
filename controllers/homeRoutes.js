const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/new-event', async (req, res) => {
  try {
    res.render('event-form', {
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/event', async (req, res) => {
  try {
    res.render('event', {
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/browse-events', async (req, res) => {
  try {
    res.render('browse-events', {
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    res.render('profile', {
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
