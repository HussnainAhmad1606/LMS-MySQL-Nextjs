import { runQuery } from "@/middlewares/db";
const jwt = require("jsonwebtoken")
const  handler = async(req, res) => {

try {
    let borrowId = req.body.borrowId;
  

   
const response = await runQuery(`SELECT * FROM borrowbook where id=${borrowId}`, []);

var type = "";
if (response.length==0) {
    type = "error"
    return res.status(200).json({type:type, response: response, message: "No Student found with this data"})
  
}
console.log(`DELETE FROM borrowbook where borrowbook.id=${borrowId}`)
const response2 = await runQuery(`DELETE FROM borrowbook where borrowbook.id=${borrowId}`, []);



return res.status(200).json({type:type, response: response, message: "Book Returned"})

        


}

catch (error) {
    
    console.log(error);
    
    return res.status(200).json({response: error, type: "error"})

}

}


export default handler;