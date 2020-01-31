const {mongoose}=require('../connection')
const Schema=mongoose.Schema
const classschema=new Schema({
ClassName:{
    type:Number,
    required:true
},
BoardId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'board'
}
})

const Class=mongoose.model('Class',classschema)
module.exports={Class}