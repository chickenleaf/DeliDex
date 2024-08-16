const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  taxApplicability: Boolean,
  tax: { type: Number, default: 0 },
  taxType: String,
});

const subCategorySchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  taxApplicability: { type: Boolean, default: false },
  tax: { type: Number, default: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

const itemSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  taxApplicability: Boolean,
  tax: { type: Number, default: 0 },
  baseAmount: Number,
  discount: Number,
  totalAmount: Number,
  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

const Category = mongoose.model('Category', categorySchema);
const SubCategory = mongoose.model('SubCategory', subCategorySchema);
const Item = mongoose.model('Item', itemSchema);

module.exports = { Category, SubCategory, Item };
