import client from '../../../config/config'
client()
import users from '../../../models/users'
export default  async function handler(req, res) {
try {
    
    switch (req.method) {
        case "GET":
       
        let listAll=await users.find({});
        res.status(200).json({status:listAll});  
            break;
            case "POST":
                let object={
                    name:req.body.name,
                    last:req.body.last,
                    password:req.body.password,
                    img:req.body.img,
                }
                console.log(object);
                users.insertMany(object).then((data)=>{
                    users.find().then((data)=>{
                        res.status(200).json({msg:data})
                    }).catch(error=>res.json({error}))
                })
            
                break;    
        default:
            res.status(405).end();
            break;
    }
} catch (error) {
    console.log(error);
    res.status(500).json({error});   
}
}