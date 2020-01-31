const express=require('express')
const router=express.Router()
router.post('/addexamsub',require('../Controller/subjectcontroller').addBoardSubject);
router.get('/getallexamsub',require('../Controller/subjectcontroller').getallBoardSubject);
module.exports=router;