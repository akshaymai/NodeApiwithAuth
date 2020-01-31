const {Role}=require('../Model/Role')

module.exports={


addrole: async (req,res)=>{
const roleobj=new Role(req.body)
try {
const bb=await roleobj.save()
res.status(200).send(bb)
} catch (error) {
   res.status(500) .send(error)
}
},
getallrole: (req,res)=>{

Role.find().then((role)=>{
    res.status(200).send(role)
}).catch((er)=>{
    res.status(500).send(er)
})
},
updaterole: async (req,res)=>{
    const  update=Object.keys(req.body);
    const allowupdate=['tittle']
    const isvaildupdate=update.forEach((updates)=>{

        return allowupdate.includes(updates)
   })
    if(!isvaildupdate)
    {
        res.status(500).send('not a valide update')
    }
    try {  
        const role=await Role.findOne({_id:req.params.id})
         if(!task)
        {
            res.status(400).send('not valide user')
        }
        role.forEach((updates)=>role[updates]=req.body[updates])
         
        await role.save();
        res.status(200).send(role)
        
        } catch (error) {
            res.send(error).status(500)
        }
}
} 