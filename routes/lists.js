const express = require("express");
const router = express.Router();

const ListsController = require("../controllers/lists");

router.get("/new", ListsController.New);
router.post("/new", ListsController.Create);
router.post("/tasks", ListsController.AddTask);
router.get("/view", ListsController.ViewOne);
router.post("/view", ListsController.ItemChecked);
router.get("/", ListsController.View);

module.exports = router;
