// required mongoose, Schema and Schema object in variable.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Pet = new Schema(
  {
    name: String,
    type: String,
    age: Number
  }
);

// ask what this does?
process.env.DB_HOST = 'mongodb://localhost/pets';

// connect to mongoose or database?
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/pets');

// export Schema so that it is usable in other files.
module.exports = mongoose.model('pets', Pet);


