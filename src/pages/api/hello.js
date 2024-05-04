import { runQuery } from "../../middlewares/db";

const  handler = async(req, res) => {

try {

const response = await runQuery("SELECT * FROM users", []);

const data = JSON.stringify(response);

return res.status(200).json({data: data})

}

catch (error) {
    
    console.log(error);
    
    return res.status(200).json({data: error})

}

}


export default handler;