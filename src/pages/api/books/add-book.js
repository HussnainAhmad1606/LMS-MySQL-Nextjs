import { runQuery } from "@/middlewares/db";
const jwt = require("jsonwebtoken")
const  handler = async(req, res) => {

try {
 let title = req.body.title;
 let author = req.body.author;
 let category = req.body.category;
 let quantity = req.body.qty
 let rent = req.body.rent

   
const response = await runQuery(`INSERT INTO books(title, author, category, quantity, rent_price_per_day) VALUES('${title}', '${author}', '${category}', '${quantity}', ${rent})`, []);

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
