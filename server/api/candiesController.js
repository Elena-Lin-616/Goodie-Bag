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

exports.updateCandy = catchAsync(async (req, res, next) => {
  console.log(req);
  console.log("LINE 20 Params", req.params);
  console.log(req.body);
  const [updatedCount, updatedCandy] = await Candy.update(req.body, {
    where: {
      id: req.params.candyId,
    },
    returning: true,
  });
  res.json(updatedCandy[0]);
});

exports.addNewCandy = catchAsync(async (req, res, next) => {
  const candy = await Candy.create(req.body);
  await candy.save();
  res.json(candy);
});

exports.deleteCandy = catchAsync(async (req, res, next) => {
  // test is the number of nums have be delete
  const test = await Candy.destroy({
    where: {
      id: req.params.candyId,
    },
  });
  res.json(test);
});
