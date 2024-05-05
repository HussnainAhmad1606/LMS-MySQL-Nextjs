import { runQuery } from "@/middlewares/db";

const  handler = async(req, res) => {

try {
    let username = req.body.username;
    let password = req.body.password;
    console.log(username, password)

    console.log(`INSERT INTO users values ('${username}', '${password}')`)
   
const response = await runQuery(`INSERT INTO users(username, password) values ('${username}', '${password}')`, []);

const data = JSON.stringify(response);

return res.status(200).json({data: data})

}

catch (error) {
    
    console.log(error);
    
    return res.status(200).json({data: error})

}

}


export default handler;