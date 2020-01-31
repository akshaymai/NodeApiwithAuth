const {mongoose}=require('../connection.js')
const Schema=mongoose.Schema;
const examinationschema=new Schema({

BoardName:{
    type:String,
    required:true
}

})


const Board=mongoose.model('board',examinationschema)

module.exports={Board}