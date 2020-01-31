const express=require('express')
const router=express.Router()
router.post('/addboardclass',require('../Controller/classcontroller').addBoardClass)
router.get('/getallexams',require('../Controller/classcontroller').getalllass)
router.get('/getallclassbyid',require('../Controller/classcontroller').getallBoardclass)
module.exports=router;