const orm = require('../config/orm');

// Call orm method, passing in the anonymous function(with "res") as the callback.
orm.selectAll("burgers").then((result) => {
    console.log(result);
});
/*
orm.insertOne("burgers", cols, vals).then((result) => {
    console.log(result);
});

orm.updateOne("burgers", objColVals, condition).then((result) => {
    console.log(result);
});

orm.deleteOne("burgers", condition).then((result) => {
    console.log(result);
});
*/

// what do we export out of this file??
// Export the database functions for the controller (catsController.js).
//module.exports = burger;