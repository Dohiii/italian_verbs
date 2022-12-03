const express = require("express");

const router = express.Router();

const getAllVerbsPublic = require("../controllers/verbs");

router.get("/", getAllVerbsPublic);


module.exports = router;
