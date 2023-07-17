const router = require("express").Router();
const userRoutes = require("./userRoutes");
const eventRoutes = require("./newEventRoutes");

router.use("/users", userRoutes);
router.use("/new-event", eventRoutes);

module.exports = router;
