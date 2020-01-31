const {fees}=require('../Model/tutionfees')

module.exports={

addtutionfess:async (req,res)=>{

    const feess= new fees(req.body);
    try {
        await feess.save();
        res.status(200).send(feess)

    } catch (error) {
        res.status(500).send(error)
    }
},
gettutionfees: (req,res)=>{

fees.find().populate('ClassId').populate('BoardId').exec().then((ff)=>{
    res.status(200).send(ff)
}).catch((er)=>{
    res.status(500).send(er)
})
},
paidstudentfees:(req,res)=>{
    fees.find().then((ress)=>{


const totalamout=ress.Amount;
const priode=ress.NumberOfPriode;
const amountperpride=totalamout/priode;
const studentAmount=req.body.StudentAmount;
if(totalamout===studentAmount)
{
    res.send('Amount full paid  by students')
}

})
}

}