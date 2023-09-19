const mongoose = require('mongoose')

const {Schema} = mongoose

const nomineeSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    relation:{
        type:String,
        required:true
    },
    aadhaarNumber:{
        type:String,
        required:true
    }
})

const Nominee = mongoose.model('Nominee',nomineeSchema)

module.exports = Nominee