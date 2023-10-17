var express = require("express");
var router = express.Router();
var todosCtrl = require("../controllers/todos");
//all actual paths start with "/todos"

//defining route for certain request, GET/todos
router.get("/", todosCtrl.index);
//get specific id

router.get("/:id", todosCtrl.show);

module.exports = router;
