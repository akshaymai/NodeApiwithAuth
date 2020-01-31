const {Class}=require('../Model/class')
const {Board}=require('../Model/Examtype')
const {ObjectId}=require('mongodb').ObjectID
module.exports={

addBoardClass :async (req,res)=>{

const allclass= new Class(req.body)
try {
const classes=await allclass.save()
res.status(201).send(classes)
} catch (error) {
    res.status(500).send(error)
}
},

getalllass:(req,res)=>{
 
    Class.find().then((reg)=>{
        res.status(200).send(reg)
    }).catch((err)=>{
        res.status(500).send(err)
    })

},
getallBoardclass:(req,res)=>{

Class.find().populate('BoardId').exec().then((tt)=>{
    res.status(200).send(tt)
}).catch((rr)=>{
    res.status(500).send(rr)
})



}
}