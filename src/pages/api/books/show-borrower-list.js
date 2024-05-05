import { runQuery } from "@/middlewares/db";
const jwt = require("jsonwebtoken")
const  handler = async(req, res) => {

try {
 
    let bookId = req.body.bookId;

   
const response = await runQuery(`SELECT bb.id AS borrowBook_id, bb.bookId, b.title, b.author, b.category, b.quantity, b.rent_price_per_day,
bb.studentId, bb.studentName, bb.librarian, bb.borrowDate
FROM borrowBook bb
JOIN books b ON bb.bookId = b.id
WHERE bb.bookId = ${bookId};`, []);

var type = "";
if (response.length==0) {
    type = "error"
}
else {
    type= "success"
   
    return res.status(200).json({type:type, response: response})
    
}


return res.status(200).json({type:type, response: response})

        


}

catch (error) {
    
    console.log(error);
    
    return res.status(200).json({response: error, type: "error"})

}

}


export default handler;