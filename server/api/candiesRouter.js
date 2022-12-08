const router = require("express").Router();
const candiesController = require("./candiesController");

// GET api/candies
router.get("/", candiesController.getAllCandies);

//GEt api/candies/candyId
router.get("/:candyId", candiesController.getCandy);

module.exports = router;
