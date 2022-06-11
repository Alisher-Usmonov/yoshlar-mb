const MainController = require("../controllers/MainController");

const router = require("express").Router();

router.get("/", MainController);

module.exports = {
    path: "/",
    router
}