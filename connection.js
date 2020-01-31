const mongoose=require('mongoose')
mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost:27017/NodeJsBackend',
 mongoose.connect('mongodb://localhost:27017/NodeJsBackend!',
{useCreateIndex:true,useUnifiedTopology: true , useNewUrlParser: true,useFindAndModify:true})
.then(()=>{
    console.log('conneted sucessfully with mongodb');
}).catch(()=>{
    console.log('not conneted with mongodb');
})
module.exports={mongoose}