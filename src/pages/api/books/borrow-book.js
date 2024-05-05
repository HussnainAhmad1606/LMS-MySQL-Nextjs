import { runQuery } from "@/middlewares/db";
const jwt = require("jsonwebtoken")
const  handler = async(req, res) => {

try {
 let bookId = req.body.bookId;
 let studentId = req.body.studentId;
 let studentName = req.body.studentName;
 let librarian = req.body.librarian

   
const response = await runQuery(`INSERT INTO borrowbook(bookId, studentId, studentName, librarian) VALUES(${bookId}, ${studentId}, '${studentName}', '${librarian}')`, []);

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