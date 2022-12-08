const Candy = require("../db");

const catchAsync = (fn) => {
  return (req, res, next) => fn(req, res, next).catch(next);
};

exports.getAllCandies = catchAsync(async (req, res, next) => {
  const candies = await Candy.findAll();
  res.json(candies);
});
