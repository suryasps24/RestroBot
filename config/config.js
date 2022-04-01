var mysql = require("mysql");
var con = mysql.createConnection({
  host: "34.135.127.136",
  user: "root",
  password: "password@12",
  database: "dg",
});
//Connection with GCP DB via MYSQL
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
//Query Functions:-
async function DatabaseOrder(restroname) {
  return new Promise((resolve, reject) => {
    con.query(
      `SELECT * FROM dg.restraunts where Restaurants = '${restroname}'`, // Fetching all details from GCP DB
      function (err, result) {
        if (err) {
          reject(err);
        }
        resolve(result);
      }
    );
  });
}

async function particular(specification, RestoNames) {
  return new Promise((resolve, reject) => {
    con.query(
      `SELECT ${specification} FROM dg.restraunts where Restaurants = '${RestoNames}'`, //Fetching Specific Values
      function (err, result) {
        if (err) {
          reject(err);
        }
        resolve(Object.values(JSON.parse(JSON.stringify(result))));
      }
    );
  });
}
module.exports = { DatabaseOrder, particular };
