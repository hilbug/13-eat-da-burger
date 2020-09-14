// Import the ORM to create functions that will interact with the database.
const dbManager = require("../config/burgerDbManager");

const burger = {
    selectAll: function() {
        return dbManager.selectAll("burgers");
    },
    
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals) {
        return dbManager.insertOne("burgers", cols, vals);
    }

    /*
    orm.updateOne("burgers", objColVals, condition).then((result) => {
        console.log(result);
    });
    
    orm.deleteOne("burgers", condition).then((result) => {
        console.log(result);
    });
    */
}

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;