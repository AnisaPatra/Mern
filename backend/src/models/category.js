const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        unique : true
      },
      slug: {
        type: String,
        required: true,
        unique: true,
      },
      type: {
        type: String,
      },
      CategoryImage: { type: String },
      parentCategory: {
        type: String,
      }

}, { timestamps: true });


module.exports = mongoose.model('Category', categorySchema);