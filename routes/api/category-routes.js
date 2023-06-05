const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  // find all categories
  try{
    const categoryData= await Category.findAll({
      // be sure to include its associated Products
      include:{
        model:Product,
        attributes:['id','product_name','price','stock','category_id']
      }
    });
    res.status(200).json(categoryData);
    return;
  }catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id',async (req, res) => {
  // find one category by its `id` value
  try{
    // be sure to include its associated Products
    const categoryData= await Category.findByPk(req.params.id,{
      include:{
        model:Product,
        attributes:['id','product_name','price','stock','category_id']
      }
    });

    if(!categoryData){
      res.status(404).json({message:'No Category found'});
      return;
    }
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err);
  }

});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name : req.body.category_name,
  })
    .then((newBook) => {
      // Send the newly created row as a JSON object
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    // All the fields you can update and the data attached to the request body.
    {
      category_name : req.body.  category_name,
    },
    {
      // Gets the category based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  ).then((updatedCategory) => {
      // Sends the updated book as a json response
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
      id:req.body.id,
    },
  })
  .then((deleteCategory)=>{
    res.status(200).json(deleteCategory)
  })
  .catch((err)=>res.json(err))
});

module.exports = router;
