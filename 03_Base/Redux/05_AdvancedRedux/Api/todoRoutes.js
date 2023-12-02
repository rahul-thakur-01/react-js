const express = require("express");
const controller = require("./todoController");

const router = express.Router();

router.get("/",controller.get);


router.post("/", controller.create);
router.post("/toggle",controller.toggle); 




module.exports.router=router;