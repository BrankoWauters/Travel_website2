var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CountrySchema= new Schema(
  {
    title: {type: String, required: true}
  }
);

// Virtual for book's URL
CountrySchema
.virtual('url')
.get(function () {
  return '/catalog/country/' + this._id;
});

//Export model
module.exports = mongoose.model('Country', CountrySchema);