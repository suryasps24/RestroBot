var mysql = require('mysql');
var con = mysql.createConnection({
  host: "34.135.127.136",
  user: "root",
  password: "password@12",
  database:"dg"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
// all function will here regarding database-----
 // for all details of restaurant --->
 async function databaseorder(restroname){
  return new Promise((resolve,reject)=>{
    con.query(`SELECT * FROM dg.restraunts where Restaurants = '${restroname}'`,function(err, result){
      if (err){
        console.log("err",err)
      }
        resolve(result)
    })
  })
}
// for specific field ---> 
async function datadetails(specification, restroname){
  return new Promise((resolve,reject)=>{
    con.query(`SELECT ${specification} FROM dg.restraunts where Restaurants = '${restroname}'`,function(err, result){
      if (err){
        console.log("err",err)
      }
        resolve(result)
    })
  })
}
module.exports = {databaseorder, datadetails }

































//where Restaurant_Name = '${restorName}'




//`SELECT Restaurant_Name,Category FROM restraunts Where Restaurant_Name='Burma Burma'`
// const User = require("../model/model")
// const {sequelize,Sequelize} = require('../db/db')
// const service = async function data(restorName){
//  let _DatafromDB =  await sequelize.query(`SELECT * FROM test.restro1`,{type: Sequelize.QueryTypes.SELECT})
//  return _DatafromDB
// }
// const category = async function data(_Category){
//   let _categoryfromDB =  await sequelize.query(`SELECT Category FROM test.restro1`,{type: Sequelize.QueryTypes.SELECT})
//   return _categoryfromDB

//  }


//  const allRestro = async function allrestro(){
//   let _Datafromdb =  await sequelize.query(`SELECT * FROM test.allrestro`,{type: Sequelize.QueryTypes.SELECT})
//   return _Datafromdb
//  }



// note-----
  //`SELECT * FROM test.restro1 where Restaurant_Name = '${restorName}'` // for dyanamic query  




















// SELECT * FROM test.restro1 where Restaurant_Name= 'Windmills Craftworks';







// const service = async function databaseorder(restorName){
//     const pool = await users
//     const result = await pool.request()
//     .query(`select * from [dbo].[Restro] where Restaurant_Name = '${restorName}'`)
//     // console.log(result,"result")
//     return result
//   }

 































 
*/
