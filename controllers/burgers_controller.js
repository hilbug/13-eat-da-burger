const express = require("express");
const router = express.Router();
const burger = require('../models/burger.js');

// Create the `router` for the app, and export the `router` at the end of your file.
router.get("/", async (req, res) => {
    try {
        const hbsObject = { burgers: await burger.selectAll() };
        console.log(hbsObject);
        res.render("index", hbsObject);
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }

});

/*
router.post("/api/burgers", (req, res) => {
  burger.insertOne(["burger_name", "devoured"],[req.body.burger_name, req.body.devoured]).then((data) => {
    // Send back the ID of the new quote
    data.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;
 
  console.log("condition", condition);
 
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, (result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
 
router.delete("/api/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;
 
  burger.deleteOne(condition, (result) => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
*/

// Export routes for server.js to use.
module.exports = router;