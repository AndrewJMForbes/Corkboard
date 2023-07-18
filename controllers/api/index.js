const router = require("express").Router();
const userRoutes = require("./userRoutes");
const newEventRoutes = require("./newEventRoutes");

router.use("/users", userRoutes);
router.use("/new-event", newEventRoutes);

module.exports = router;
