var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
const data = require("../Tasks");
/* GET tasks listing. */
router.get("/", function(req, res, next) {
    res.send(data);
});

/* GET tasks listing. */
router.get("/:id", function(req, res, next) {
    res.send(data.filter((task) => task.id === parseInt(req.params.id)));
});

// Create TASK
router.post("/", (req, res, next) => {
    res.send(data.concat(req.body));
});

//Update task
router.put("/:id", function(req, res, next) {
    id = parseInt(req.params.id);

    let newData = data.map((task) =>
        task.id === id ? {...task, ...req.body } : task
    );
    res.send(newData);
});

//Delete task
router.delete("/:id", (req, res, next) => {
    res.send(data.filter((task) => task.id !== parseInt(req.params.id)));
});

module.exports = router;