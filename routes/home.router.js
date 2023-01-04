// Home routes setup


const express = require("express");
const homeController = require("../controllers/home.controller");
const router = express.Router();



// Home -- GET
router.get('/' , homeController.home)

module.exports = router
