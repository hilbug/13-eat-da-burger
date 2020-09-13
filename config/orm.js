// ORM class provided by Bobby
// Import MySQL connection.
const mysql = require('mysql');

class ORM {
    connection;

    constructor(connection) {
        this.connection = connection;
    }

    query = (queryString, vals) => {
        return new Promise((resolve, reject) => {
            this.connection.query(queryString, vals, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    };
    ////////////// from Cats 13-3 exercise #17 //////////////////////////////
    printQuestionMarks = (num) => {
        var arr = [];

        for (var i = 0; i < num; i++) {
            arr.push("?");
        }

        return arr.toString();
    }

    // Helper function to convert object key/value pairs to SQL syntax
    objToSql = (ob) => {
        var arr = [];

        // loop through the keys and push the key/value as a string int arr
        for (var key in ob) {
            var value = ob[key];
            // check to skip hidden properties
            if (Object.hasOwnProperty.call(ob, key)) {
                // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
                if (typeof value === "string" && value.indexOf(" ") >= 0) {
                    value = "'" + value + "'";
                }
                // e.g. {burger_name: 'Cheeseburger'} => ["burger_name='Lana Del Grey'"]
                // e.g. {devoured: true} => ["devoured=true"]
                arr.push(key + "=" + value);
            }
        }

        // translate array of strings to a single comma-separated string
        return arr.toString();
    }
    /////////////////////////////////////////////////////////////////////////////


    selectAll(tableInput) {
        //let queryString = "SELECT * FROM" + tableInput + ";";

        console.log(queryString);

        return this.query(`SELECT * FROM ${tableInput};`);
    }

    insertOne = (table, cols, vals) => {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        return this.query(queryString, vals);
    }

    updateOne = (table, objColVals, condition) => {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        return this.query(queryString);
    }

    deleteOne = (table, condition) => {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        return this.query(queryString);
    }
}

module.exports = ORM;

/* * In the `orm.js` file, create the methods that will execute the necessary
MySQL commands in the controllers. These are the methods you will need to use
in order to retrieve and store data in your database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`
     * `deleteOne()`

   * Export the ORM object in `module.exports`.
   */