const {mongoose}=require('../connection')
const schema=mongoose.Schema;
const validator=require('validator')
const bcrypt=require('bcryptjs')
const {Task}=require('../Model/task')
const jwt=require('jsonwebtoken')
const userschema=new schema({

 _id:mongoose.Schema.Types.ObjectId,

Name:{
    type:String,
    required:true,
    trim:true
},

Role:{
type:mongoose.Schema.Types.ObjectId,
required:true,
ref:'role'
},
// Role:{
// type:String,
// enum:['Admin','Teacher','Students'],
// required:true
// },
Email:{
    type:String,
    required:true,
    lowercase:true,
    validate:{
        validator:validator.isEmail,
        message:'${VALUE} is not a valide Email'
    },
    trim:true,
    unique:true
},
Password:{
    type:String,
    required:true,
    trim:true

},

Age:{
    
    type:Number,
    default:0,
},
tokens:[{

token:{
type:String,
required:true
}
}

],
profileimage:{
    type:Buffer
}


},{
    timestamps:true
})

// userschema.virtual('tasks',{
//     ref:'task',
//     foreignField:'Owner',
//     localField:'_id',

// })
userschema.virtual('tasks',{
  ref:'task',
  foreignField:'Owner',
  localField:'_id'
})





userschema.statics.logincredential=async function (Email,Password){

const user=await User.findOne({Email});
if(!user)
{
           return 'Email not registered with us!!'
}

const isMatch= await bcrypt.compare(Password,user.Password)
if(!isMatch)
{   
    return "Password not match"
}
return user
}

userschema.statics.resetpassword=async function (Email,Current,Reset){
    const user=await  User.findOne({Email})
    if(!user)
{
           return 'Email not registered with us!!'
}
const currentPassword=await bcrypt.compare(Current,user.Password)
if(currentPassword)
{
    console.log("your password is matched!!")

    // user.Password=await bcrypt.hash(Reset,8);
    user.Password=Reset
}
else
{
    return ('Password not match')
}
return user;
}

userschema.statics.forgetpassword=async function (Email){
    const user=await User.findOne({Email})
    console.log("user is:",user)
    if(!user){
        return 'Email not registered with us!!'  
    }
    const password=await user.Password;
    return password
}

userschema.pre('save',async function (next){

const user=this;

if(user.isModified('Password')){

 user.Password=await bcrypt.hash(user.Password,8)

}

    next();
})


userschema.methods.genaratetoken=async function(){
const user=this;
const token= jwt.sign({_id:user._id,Email:user.Email},'abc123',{
    expiresIn:"30d"
})
user.tokens=user.tokens.concat({token})
await user.save()
return token
}


userschema.methods.toJSON=function(){
    var user=this

    var  userobj=user.toObject()
    // delete userobj.Password
    // delete userobj.tokens;

    return userobj;
}



userschema.pre('remove',async function(next){

var user=this;
await Task.deleteMany({Owner:user._id})
next();

})


const User=mongoose.model('user',userschema)
module.exports={User}














