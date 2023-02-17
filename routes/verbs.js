const express = require("express");

const router = express.Router();

const { getAllVerbsPublic, pingVerbs, getSingleVerb, postVerbPublic } = require("../controllers/verbs");

router.get("/", getAllVerbsPublic).get("/ping", pingVerbs).get("/full", getSingleVerb).post(
  "/", postVerbPublic
);


module.exports = router;
