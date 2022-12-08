const { Candy } = require("../db");

const catchAsync = (fn) => {
  return (req, res, next) => fn(req, res, next).catch(next);
};

// GET api/candies
exports.getAllCandies = catchAsync(async (req, res, next) => {
  const candies = await Candy.findAll();
  res.json(candies);
});

//GEt api/candies/candyId
exports.getCandy = catchAsync(async (req, res, next) => {
  const candy = await Candy.findByPk(req.params.candyId);
  res.json(candy);
});
