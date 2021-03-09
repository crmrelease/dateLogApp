exports.getTest = async (req, res, next) => {
  console.log("get api");
  res.status(201).json({ result: "successGet" });
};

exports.postTest = async (req, res, next) => {
  console.log("post api");
  console.log("req", req.body);
  res.status(201).json({ result: "successPost" });
};
