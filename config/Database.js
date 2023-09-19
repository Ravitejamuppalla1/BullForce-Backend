const mongoose = require('mongoose')

const configureDB = async (req, res) => {
    try {
        const mongoConnect = await mongoose.connect('mongodb://127.0.0.1:27017/BullForce')
        console.log('succesfully connected to mongodb')

    }
    catch (e) {
        console.log(e)
    }

}
module.exports = configureDB