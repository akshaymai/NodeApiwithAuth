const {mongoose}=require('../connection')
const schema=mongoose.Schema;
const feeschema=new schema({
    ClassId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Class',
        required:true
    },
    BoardId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'board',
        required:true
    },                      
   Amount:{
       type:Number,
       required:true
   },
   NumberOfPriode:{
       type:Number,
       required:true
   }
})
const fees=mongoose.model('fees',feeschema)
module.exports={fees}