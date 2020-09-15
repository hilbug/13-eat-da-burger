// Import the ORM to create functions that will interact with the database.
const dbManager = require("../config/burgerDbManager");

const burger = {
    selectAll: function() {
        return dbManager.selectAll("burgers");
    },

    selectAllWhere: function(condition) {
        return dbManager.selectAllWhere("burgers", condition);
    },
    
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals) {
        return dbManager.insertOne("burgers", cols, vals);
    },

    updateOne: function(objColVals, condition) {
        return dbManager.updateOne("burgers", objColVals, condition);
    },
    
    deleteOne: function(condition) {
        return dbManager.deleteOne("burgers", condition)
    }
}

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;