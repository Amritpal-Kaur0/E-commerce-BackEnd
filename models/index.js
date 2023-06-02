// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasOne(Product,{
  foreignKey:'id',
  onDelete:'CASCADE',
})

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey:'id',
})

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)
Tags.belongToMany()

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
