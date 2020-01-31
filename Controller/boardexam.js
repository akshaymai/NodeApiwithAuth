const {Board}=require('../Model/Examtype')


module.exports={


addBoards:async(req,res)=>{
    const boards=new Board(req.body)
try {
    const exams=await boards.save()
    res.status(201).send(exams)
    
} catch (error) {
    res.status(500).send(error)
    
}
},

getallboards:(req,res)=>{
    Board.find().then((ff)=>{
        res.status(200).send(ff)
    }).catch((er)=>{
        res.status(500).send(er)
    })
},
getboardbyids:(req,res)=>{
    Board.findById(req.params.id).then((rr)=>{

    res.status(200).send(rr)
}).catch((err)=>{

res.status(500).send(err)

})
},

// updatequestions:async (req,res)=>{

// const update=Object.keys()
// const allowupdate=['QuestionPaper','DifficultyLevel','Answer','TotalMarks']
// const isvalidupdate=update.forEach((updates)=>{

//      return allowupdate.includes(updates)
// })
// if(!isvalidupdate){

//     res.status(200).send('not valide update')
// }
// const questionpaper=await question.findById({_id:req.params.id})
// try {
//     update.forEach((bb)=>{
//         questionpaper[bb]=req.body[bb]
//     })

// } catch (error) {
    
//     res.status(500).send(error)
// }



// }
}