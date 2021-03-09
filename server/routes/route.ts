import express from "express";

const router = express.Router();
const testController = require("../controller/testAPI");

router.get("/test", testController.getTest);
router.post("/test/:clientInput", testController.postTest);

export default router;
