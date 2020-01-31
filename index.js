const express=require('express')
const app=express()
app.use(express())
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/user',require('./Router/userrouter'));
app.use('/task',require('./Router/taskrouter'));
app.use('/question',require('./Router/questionrouter'));
app.use('/role',require('./Router/rolerouter'));
app.use('/examination',require('./Router/boardexam'));
app.use('/addclass',require('./Router/classrouter'));
app.use('/subject',require('./Router/subjectrouter'));
app.use('/fees',require('./Router/tutionfeess'));
module.exports={app}

 

