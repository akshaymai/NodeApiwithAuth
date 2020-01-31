const {mongoose}=require('../connection')
const Schema=mongoose.Schema;
const roleschema=new Schema({ 
tittle:{
    type:String,
    required:true
},
},{
    timestamps:true
})

const Role=mongoose.model('role',roleschema);

module.exports={Role}