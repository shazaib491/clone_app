const mongoose = require('mongoose');
const config = require('../mongoose');

const productSchema = mongoose.Schema({
      banner: {
        type: String
      },
      // productImg: {
      //   type: Array
      // },
      // productName: {
      //   type: String
      // },
      // rating: {
      //   type: Number
      // },
      // mrp: {
      //   type: Number
      // },
      // price: {
      //   type: Number
      // },
      // color: {
      //   type: String
      // },
      // brand: {
      //   type: String
      // },
      // Material: {
      //   type: String
      // },
      // itemDimension: {
      //   type: String
      // },
      // itemWeight: {
      //   type: String
      // },
      // voltage: {
      //   type:  String
      // },
      // capacity: {
      //   type:  String
      // },
      // Features:{
      //   type:Array
      // },
      //   label:{
      //   type:Array
      // }
    }
  )

    const product = module.exports = mongoose.model('product', productSchema);

    module.exports.insertProduct=(product,callback)=>{
      product.save(callback);
    }
