 const express=require('express')
 const router=express.Router();
 const usercontroller=require('../Controller/userconroller')
 const multer=require('multer')
 const {auth}=require('../Authorization/auth')
 
const uploads=multer({
// dest:'./Upload',
limits:{
    fileSize:1000000
},
fileFilter:(req,file,callback)=>{
if(!file.originalname.match(/\.(PNG||png||JPG||jpg)$/)){
    return callback('enter a valide file')
}
callback(undefined,true)
}
})



var vediostorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './Upload')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname )
    },
});


var vedioupload=multer({storage:vediostorage})
router.post('/adduser',usercontroller.adduser)
router.get('/getalluser',usercontroller.getalluser)
router.get('/getuserbyid/:id',usercontroller.getuserbyid)
router.delete('/deletebyid/:id',usercontroller.deleteuserbyid)
router.delete('/deleteall',usercontroller.deletealll)
router.put('/updateuser',auth,usercontroller.updateuser)
router.post('/loginuser',usercontroller.login)
router.get('/users/me',auth,usercontroller.findme)
router.post('/user/me',auth,usercontroller.deletebytoken)
router.post('/logoutall',auth,usercontroller.logoutall)
router.post('/logout',auth,usercontroller.logout)
router.delete('/delete/me',auth,usercontroller.deletebytoken)
router.post('/uploadfile',auth,uploads.single('myFile'),usercontroller.uploadimage)
router.post('/deleteprofile',auth,usercontroller.deleteiamge)
router.get('/getprofileurl/:id',usercontroller.imageshowurl)
router.post('/uploadvediobyteacher',auth,vedioupload.single('vedio'),usercontroller.uploadvedio)
router.post('/restpassword',usercontroller.resetpassword)
router.post('/forgetpassword',usercontroller.forgetpassword)
module.exports=router
