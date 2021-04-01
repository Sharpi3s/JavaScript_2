const mongodb = require('mongoose')

const orderSchema = mongodb.Schema({

  userId: {type: String, required: true},
  email: {type: String, required: true},
  cart: {type: Array},
  totalprice: {type: Number},

  createdAt: { type: Date, default: new Date }
})

module.exports = mongodb.model('order', orderSchema);