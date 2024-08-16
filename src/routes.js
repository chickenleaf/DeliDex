const express = require('express');
const router = express.Router();
const { Category, SubCategory, Item } = require('./models');

// Create Category
router.post('/category', async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).send(category);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get All Categories
router.get('/category', async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get Category by ID
router.get('/category/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).send();
    res.send(category);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create SubCategory
router.post('/subcategory', async (req, res) => {
  try {
    const subCategory = new SubCategory(req.body);
    await subCategory.save();
    res.status(201).send(subCategory);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get All SubCategories
router.get('/subcategory', async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    res.send(subCategories);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get SubCategories by Category ID
router.get('/subcategory/category/:categoryId', async (req, res) => {
  try {
    const subCategories = await SubCategory.find({ category: req.params.categoryId });
    res.send(subCategories);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create Item
router.post('/item', async (req, res) => {
  try {
    const item = new Item(req.body);
    item.totalAmount = item.baseAmount - item.discount;
    await item.save();
    res.status(201).send(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get All Items
router.get('/item', async (req, res) => {
  try {
    const items = await Item.find();
    res.send(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get Items by SubCategory ID
router.get('/item/subcategory/:subCategoryId', async (req, res) => {
  try {
    const items = await Item.find({ subCategory: req.params.subCategoryId });
    res.send(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Search Item by Name
router.get('/item/search', async (req, res) => {
  try {
    const items = await Item.find({ name: new RegExp(req.query.name, 'i') });
    res.send(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Edit Category
router.put('/category/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return res.status(404).send();
    res.send(category);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit SubCategory
router.put('/subcategory/:id', async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subCategory) return res.status(404).send();
    res.send(subCategory);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit Item
router.put('/item/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).send();
    item.totalAmount = item.baseAmount - item.discount;
    await item.save();
    res.send(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
