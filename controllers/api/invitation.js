const router = require('express').Router();

router.get("/", async (req, res) => {
  try {
    console.log("Hello World")
    res.send("HELLO WORLD")
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
