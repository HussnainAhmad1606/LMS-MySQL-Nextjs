import { runQuery } from "@/middlewares/db";
const jwt = require("jsonwebtoken")
const  handler = async(req, res) => {

try {
    let bookId = req.body.bookId;
  

   
const response = await runQuery(`SELECT COUNT(*) AS borrowed
FROM borrowbook;`, []);
const response2 = await runQuery(`SELECT COUNT(*) AS total
FROM books;`, []);

var type = "";
if (response.length==0) {
    type = "error"
}
else {
    type= "success"
    
    return res.status(200).json({type:type, borrowed: response[0], total: response2[0]})
    
}


return res.status(200).json({type:type, response: response})

        


}

catch (error) {
    
    console.log(error);
    
    return res.status(200).json({response: error, type: "error"})

}

}


export default handler;