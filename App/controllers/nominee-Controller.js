const Nominee = require('../models/nominee')

const nomineeCtlr = {}

nomineeCtlr.create =  async(req,res)=>{
    try{
       const {body} = req
       const newNominee = await Nominee.create(body)
       res.json(newNominee)
    }
    catch(e){
        res.json(e)
    }
}

module.exports = nomineeCtlr