const express = require("express");

const router = express.Router();

const { getAllVerbsPublic, pingVerbs, getSingleVerb } = require("../controllers/verbs");

router.get("/", getAllVerbsPublic).get("/ping", pingVerbs).get("/full", getSingleVerb);


module.exports = router;
