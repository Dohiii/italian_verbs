const express = require("express")
const {
    getAllVerbs,
    getVerb,
    createVerb,
    updateVerb,
    deleteVerb
} = require("../controllers/admin")

const router = express.Router();

router.route("/").post(createVerb).get(getAllVerbs)
router.route("/:id").get(getVerb).patch(updateVerb).delete(deleteVerb)

module.exports = router