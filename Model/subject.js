const {mongoose}=require('../connection')
const Schema=mongoose.Schema;
const subjectschema=new Schema({
SubjectName:{
    type:String,
    required:true
},
BoardId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'board',
    required:true
},
ClassID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Class',
    required:true
}
});

const Subjectmodel=mongoose.model('subject',subjectschema)

module.exports={Subjectmodel}