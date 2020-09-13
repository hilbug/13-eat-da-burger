// Import the ORM to create functions that will interact with the database.
const dbManager = require("../config/burgerDbManager");

const burger = {
    selectAll: function() {
        return dbManager.selectAll("burgers");
    }
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
}


// what do we export out of this file??
// Export the database functions for the controller (catsController.js).
//module.exports = burger;