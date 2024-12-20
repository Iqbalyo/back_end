const { findAll, login, findByNim } = require("../controller/userController");

const router = require("express").Router()

router.get("/", findAll)
router.post("/login", login)
router.get("/:nim", findByNim); 
module.exports = router;