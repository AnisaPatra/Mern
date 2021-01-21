const express = require('express');
const { addCategory, getCategories, getSubCategory, getParentCategory } = require('../controller/category');
const router = express.Router();
const {requireSignin, adminMiddleware,upload} = require('../common-middleware/index');

router.post('/category/create', requireSignin, adminMiddleware, upload.single('CatergoryImage'), addCategory);
router.get('/category/getcategory', getCategories);
router.get('/category/subcategory', getSubCategory);
router.get('/category/parentCategory',getParentCategory);
module.exports = router;