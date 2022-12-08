const router = require("express").Router();
const candiesController = require("./candiesController");

// GET api/candies
router.get("/", candiesController.getAllCandies);

//GEt api/candies/candyId
router.get("/:candyId", candiesController.getCandy);

// PUT api/candies/candyId
router.put("/:candyId", candiesController.updateCandy);

// POST api/candies/
router.post("/", candiesController.addNewCandy);

// DELETE api/candies/:candyId
router.delete("/:candyId", candiesController.deleteCandy);

module.exports = router;
