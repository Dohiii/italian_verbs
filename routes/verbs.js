const express = require("express");

const router = express.Router();

const { getAllVerbsPublic, pingVerbs } = require("../controllers/verbs");

router.get("/", getAllVerbsPublic).get("/ping", pingVerbs);


module.exports = router;
