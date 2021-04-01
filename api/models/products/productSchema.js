const mongodb = require('mongoose')

const productSchema = mongodb.Schema({

  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
  itemNumber: { type: Number, default: function() {
    return Math.floor(100000 + Math.random() * 900000) },
  } ,
  // itemNumber: { type: Number, default: Math.floor(100000 + Math.random() * 900000) },
  createdAt: { type: Date, default: Date.now() }

})

module.exports = mongodb.model('product', productSchema);

