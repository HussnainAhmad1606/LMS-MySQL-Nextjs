import { runQuery } from "@/middlewares/db";
const  handler = async(req, res) => {

try {
 let bookId = req.body.bookId;
 let studentId = req.body.studentId;
 let studentName = req.body.studentName;
 let librarian = req.body.librarian;



   
const check = await runQuery(`SELECT * FROM students where studentName='${studentName}' and rollNo=${studentId}`, []);

console.log(check)

if (check.length==0) {
    return res.status(200).json({type:"error", message: "Student Not Registered"});

}
   
const response = await runQuery(`INSERT INTO borrowbook(bookId, studentId, studentName, librarian) VALUES(${bookId}, ${studentId}, '${studentName}', '${librarian}')`, []);

var type = "";
if (response.length==0) {
    type = "error"
}
else {
    type= "success"
    return res.status(200).json({type:type, response: check})
    
}


return res.status(200).json({type:type, response: response})

        


}

catch (error) {
    
    console.log(error);
    
    return res.status(200).json({response: error, type: "error"})

}

}


export default handler;