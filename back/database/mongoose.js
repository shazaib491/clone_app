const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://127.0.0.1:27017/amazon', {
}).then(() => {
  console.log('conncted to database');
}).catch((err) => {
  console.log(err);
})
const secret="amazon";
module.exports=mongoose;
module.exports.secret=secret;
