const express = require('express')
const route = express.Router()
const nomineeCtlr = require('../App/controllers/nominee-Controller')

route.post('/api/nominee',nomineeCtlr.create)



module.exports = route