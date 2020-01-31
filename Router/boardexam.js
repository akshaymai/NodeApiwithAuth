const express=require('express')
const router=express.Router()
router.post('/addboard',require('../Controller/boardexam').addBoards)
router.get('/getallboaard',require('../Controller/boardexam').getallboards)
router.get('/getboardbyId/:id',require('../Controller/boardexam').getboardbyids)
module.exports=router;