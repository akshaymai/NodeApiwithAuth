const {mongoose}=require('../connection')

const schema=mongoose.Schema;

const questionschema=new schema({
BoardId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
},

QuestionPaper:{
    type:String,
    required:true
},
DifficultyLevel:{
    type:Number,
    required:true
},
Answer:{
    type:String,
    required:true
},
TotalMarks:{
    type:Number,
    required:true,
    trim:true
} ,
SubjectId:{
      type:mongoose.Schema.Types.ObjectId,
      required:true
},
ClassId:{

type:mongoose.Schema.Types.ObjectId,
required:true
},
ChapterId:{
type:mongoose.Schema.Types.ObjectId,
required:true
},
userId:{
   type:mongoose.Schema.Types.ObjectId,
   required:true 
}
})

const question=mongoose.model('Question',questionschema)

module.exports={question}