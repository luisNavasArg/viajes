import client from '../../../config/config'
client()
import users from '../../../models/users'
export default function handler(req, res) {
    try {
      switch (req.method) {
        case 'DELETE':
          let idDel = req.query.id;
          console.log(idDel);
          users.findOneAndDelete({_id:idDel})
          .then((result)=>{
            res.status(200).json(result);
          })
          .catch(err=>res.status(401).json({error:err}))
          break;
        case 'PUT':
          let id = req.query.id;
          let data = {
            name:req.body.name,
            last:req.body.last,
            password:req.body.password,
            img:req.body.img
          }
          users.findByIdAndUpdate({_id:id},data)
          .then((result)=>{
            res.status(200).json({ result:result})
          })
          .catch(err=>res.status(401).json({error:err}))
          
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