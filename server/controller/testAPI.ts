const { Test } = require("../models");

exports.getTest = async (req, res, next) => {
  console.log("get api");
  const result = await Test.findOne({ where: { name: "테스트" } });
  console.log(result.toJSON());
  res.status(201).json({ result: "successGet" });
};

exports.postTest = async (req, res, next) => {
  try {
    console.log("post api");
    console.log("req", req.body);
    const result = await Test.create({ name: req.body.content });
    console.log(result.toJSON());
    res.status(201).json({ result: "successPost" });
  } catch (error) {
    next(error);
  }
};
