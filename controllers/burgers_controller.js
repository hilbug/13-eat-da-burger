const express = require("express");
const router = express.Router();
const burger = require('../models/burger.js');

// Create the `router` for the app, and export the `router` at the end of your file.
router.get("/", async (req, res) => {
    const condition1 = "devoured = 0";
    const condition2 = "devoured = 1";
    try {
        const hbsObject = { 
            burgersNotDevoured: await burger.selectAllWhere(condition1),
            burgersDevoured: await burger.selectAllWhere(condition2)
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }

});


router.post("/api/burgers", async (req, res) => {
    try {
        const result = await burger.insertOne(
            //cols
            ["burger_name", "devoured"],
            // vals
            [req.body.burger_name, req.body.devoured]
        );
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.put("/api/burgers/:id", async (req, res) => {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);

    try {
        const result = await burger.updateOne(
            { devoured: req.body.devoured },
            condition
        );

        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


router.delete("/api/burgers/:id", async (req, res) => {
    const condition = "id = " + req.params.id;

    try {
        const result = await burger.deleteOne(condition);

        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


// Export routes for server.js to use.
module.exports = router;