const { Test } = require("../models");
import axios from "axios";

exports.getTest = async (req, res, next) => {
  //  const result = await Test.findOne({ where: { name: "테스트" } });
  try {
    const response = await axios.get("http://localhost:5000/test");
    console.log(response.data);
    res.status(201).send(response.data);
  } catch (error) {
    console.log(error);
  }
};

exports.postTest = async (req, res, next) => {
  try {
    //    const result = await Test.create({ name: req.body.content });
    //  console.log(result.toJSON());
    const response = await axios.post("http://localhost:5000/test", {
      content: "testData",
    });
    console.log(response.data);
    res.status(201).json({ result: "successPost" });
  } catch (error) {
    next(error);
  }
};
