const router = require("express").Router();
const { User, Event, Invitation } = require("../models");
const withAuth = require("../utils/auth");
const dayjs = require("dayjs");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/calendar", async (req, res) => {
  try {
    res.render("calendar", {
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/new-event", async (req, res) => {
  try {
    res.render("event-form", {
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/meet-team", async (req, res) => {
  try {
    res.render("meet-the-team", {
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search-results", async (req, res) => {
  try {
    const search = req.query.search;

    const userResult = await User.findAll({
      where: {
        username: {
          [Op.like]: `%${search}%`,
        },
      },
    });

    const users = userResult.map((user) => {
      return user.get({plain: true})
    })

    const eventResult = await Event.findAll({
      where: {
        eventName: {
          [Op.like]: `%${search}%`,
        },
      },
    });

    const events = eventResult.map((event) => {
      return event.get({plain: true})
    })

    res.render("search-results", {
      users,
      events,
      loggedIn: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/event/:id", async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
      include: [
        {
          model: User,
          through: Invitation,
          as: "invited_users",
        },
      ],
    });

    const hostData = await Invitation.findOne({
      where: {
        event_id: req.params.id,
        isHost: true,
      },
    });

    const hostUser = await User.findOne({
      where: {
        id: hostData.user_id,
      },
    });

    const host = hostUser.get({ plain: true });

    const event = eventData.get({ plain: true });


    res.render("event", {
      host,
      event,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/event/:id", async (req, res) => {
  try {
    const today = "Today";
    let email;
    console.log(req.body.email)

    if (req.body.email === "session"){
      email = req.session.user_email;
    } else {
      email = req.body.email;
    }

    const userData = await User.findOne({where:{
      email : email
    }
    })
    if(!userData){
      console.log("NO USER")
      const newUser = await User.create({
        username: "Unnamed User",
        email: req.body.email,
        password: "tempPass123",
        birthday: dayjs(),
        location: "Nowhere",
      })
      const newInvitation = await Invitation.create({
        invitationStatus: "Maybe",
        invitationDate: today,
        event_id: req.params.id,
        user_id: newUser.id,
        isHost: false,
      })
      res.status(200).json(newInvitation);
    }
    
    if(userData){
      const newInvitation = await Invitation.create({
        invitationStatus: "Maybe",
        invitationDate: today,
        event_id: req.params.id,
        user_id: userData.id,
        isHost: false,
      })
      res.status(200).json(newInvitation);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json("Could not add Invitee");
    return;
  }
});

router.get("/browse-events", async (req, res) => {
  try {
    const publicEventData = await Event.findAll();

    const publicEvents = publicEventData.map((data) =>
      data.get({ plain: true })
    );

    res.render("browse-events", {
      events: publicEvents,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Event,
          through: Invitation,
          as: "user_events",
        },
      ],
    });
    const user = userData.get({ plain: true });

    user.upcomingEvents = user.user_events.slice(0, 3);

    const calendarEvents = user.upcomingEvents.map((event) => ({
      title: event.eventName,
      start: dayjs(event.eventDate).format("YYYY-MM-DD"),
      url: `/event/${event.id}`,
    }));


    res.render("profile", {
      user,
      calendarEvents: JSON.stringify(calendarEvents),
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/my-profile", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Event,
          through: Invitation,
          as: "user_events",
        },
      ],
    });
    const user = userData.get({ plain: true });

    user.upcomingEvents = user.user_events.slice(0, 3);

    const calendarEvents = user.upcomingEvents.map((event) => ({
      title: event.eventName,
      start: dayjs(event.eventDate).format("YYYY-MM-DD"),
      url: `/event/${event.id}`,
    }));


    res.render("profile", {
      user,
      calendarEvents: JSON.stringify(calendarEvents),
      loggedIn: req.session.logged_in,
    });

    // var today = new Date();
    // var birthDate = new Date(user.birthDate);
    // var age = today.getFullYear() - birthDate.getFullYear();
    // var m = today.getMonth() - birthDate.getMonth();
    // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //   age--;
    // }
  //   console.log("USER BIRTHDATE", userData.dataValues.birthday);
  // let birthDateTime = userData.dataValues.birthday;
  //   console.log(typeof birthDateTime);
  // //   let birthDate = birthDateTime.toString();
  // // let cleanUp = birthDateTime.split("T");

  //   console.log("BIRTHDATE", birthDateTime);

  //   const today = dayjs();

  //   const age = today.diff(dayjs(birthdate), "years");

  //   console.log(age);
  //   console.log(age, "AGE");

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
