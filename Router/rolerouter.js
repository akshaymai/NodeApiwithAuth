const express=require('express')
const router=express.Router()
router.post('/addrole',require('../Controller/rolecontroller').addrole);
router.put('/updaterole',require('../Controller/rolecontroller').updaterole);
router.get('/roles',require('../Controller/rolecontroller').getallrole)
module.exports=router;
