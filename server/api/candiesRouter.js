const router = require("express").Router();
const candiesController = require("./candiesController");

// GET api/candies
router.get("/", candiesController.getAllCandies);

module.exports = router;
