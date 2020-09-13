const connection = require('./connection');

const orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
      return new Promise((resolve, reject) => {
        var queryString = "SELECT * FROM ??";
        
        connection.query(queryString, [burgers], function(err, result) {
          if (err) reject(err);
          resolve(result);
        });
      });
    }
  };
  
  module.exports = orm;
  




/* * In the `orm.js` file, create the methods that will execute the necessary 
MySQL commands in the controllers. These are the methods you will need to use 
in order to retrieve and store data in your database.
​
     * `selectAll()`
     * `insertOne()`
     * `updateOne()`
     * `deleteOne()`
​
   * Export the ORM object in `module.exports`.
   */