const express=require('express')
const router=express.Router();
router.post('/addtutionfess',require('../Controller/tutuionfees').addtutionfess)
router.get('/getallfess',require('../Controller/tutuionfees').gettutionfees)

module.exports=router