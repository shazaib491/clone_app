const mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const config = require('../database/mongoose');
const product = require('../database/model/product');
const multer = require('multer');

// const DIR = './uploads/';

// const storage = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   console.log(file);
  //   cb(null, DIR);
  // // },
  // filename: (req, file, cb) => {
  //   console.log(file);
    // const fileName = file.originalname.toLowerCase().split(' ').join('-');
    // cb(null, fileName)
  // }
// });
// var upload = multer({
//   storage: storage,
  // limits: {fileSize: 1024 * 1024 * 5},
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//     }
//   }
// });
var upload = multer({ dest: './uploads/' })

router.post('/addItem', upload.single('banner'), (req, res) => {
JSON.parse(req.file)
console.log(req.file);
  const url = req.protocol + '://' + req.get('host');
  // console.log("INSIDE REQUEST",req.body)
  console.log("Files", req.file)
  console.log("**************************************************")
  // console.log(req)
  let arrdata = [];
  // off karke on krbapas

  // for (let i in pro) {
  //   arrdata.push(pro[i].filename);
  // }
  // let item = new product({
  // productName: req.body.productName,
  // mrp: req.body.mrp,
  // price: req.body.price,
  // color: req.body.color,
  // brand: req.body.brand,
  // itemDimension: req.body.itemDimension,
  // itemWeight: req.body.itemWeight,
  // voltage: req.body.voltage,
  // capacity: req.body.capacity,
  // banner: url + '/uploads/' + req.file['banner'][0].filename,
  // productImg: arrdata,
  // Features:req.body.features,
  // label:req.body.label
  // });




  // product.insertProduct(item, (err, product) => {
  //   if (err) {
  //     console.log(err);
  //     console.log(err,'1');
  //   } else {
  //     res.send('data');
  //   }

  // }
  // )

})
module.exports = router;
