const { HomeGet, SportGet, EmploymentGet, PolicyGet, ProblemGet, InitiativeGet, LibraryGet } = require("../controllers/MainController");

const router = require("express").Router();

router.get("/", HomeGet);
router.get("/sport", SportGet);
router.get("/bandlik", EmploymentGet);
router.get("/yoshlarga-oid-davlat-siyosati", PolicyGet);
router.get("/kutubxona", LibraryGet);
router.get("/tashabbus", InitiativeGet);
router.get("/muammo-va-yechim", ProblemGet);

module.exports = {
    path: "/",
    router
}