const express = require("express");
const router = express.Router();

const ListsController = require("../controllers/lists");

router.get("/new", ListsController.New);
router.post("/new", ListsController.Create);
router.get("/", ListsController.View);
router.post("/tasks", ListsController.AddTask);

module.exports = router;
