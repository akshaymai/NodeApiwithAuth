const {Subjectmodel}=require('../Model/subject')

module.exports={

addBoardSubject :async (req,res)=>{

const allsubject= new Subjectmodel(req.body)
try {
const sub=await allsubject.save()
res.status(201).send(sub)
} catch (error) {
    res.status(500).send(error)
}
},

getallBoardSubject:(req,res)=>{
Subjectmodel.find().populate('BoardId').populate('ClassID').exec().then((ff)=>{
    res.status(200).send(ff)
}).catch((err)=>{
    res.status(500).send(err)
})
}
}