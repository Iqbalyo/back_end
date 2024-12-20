const router = require("express").Router()

const user = require("./user")
const absen = require("./absensi1mahasiswa")
const ipk = require("./ipk")

router.use("/monitoring/unama/v1/user", user)
router.use("/monitoring/unama/v1/absensi", absen)
router.use("/monitoring/unama/v1/ipk", ipk)

module.exports = router;