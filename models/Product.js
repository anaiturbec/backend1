const mongoose = require('mongoose');

const product = mongoose.Schema({
    name:{type: String, required: true, unique:true},
    link:{type: String, required: true},
    description:{type: String, required: true},
    logo:{type: String, required: true},
    votes:{type: Number, required: true},


})

const Product = mongoose.model('Product', product)
module.exports = Product;