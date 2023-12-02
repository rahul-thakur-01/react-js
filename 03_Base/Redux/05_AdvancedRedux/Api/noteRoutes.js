const express = require("express");
const controller = require("./noteController");

const router = express.Router();

router.get("/",controller.get);

router.post("/deleteNote",controller.deleteNote);


router.post("/", controller.create); 




module.exports.router=router;