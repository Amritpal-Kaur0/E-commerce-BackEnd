const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const TagsData = await Tag.findAll({
      // include: [{ model: Product }],
    });
    res.status(200).json(TagsData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id',async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const TagsData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!TagsData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(TagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then((TagData) => res.json(TagData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((TagData) => {
    if (!TagData) {
      res.status(404).json({ message: " Tag ID Not found" });
      return;
    }
    res.json(TagData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((TagData) => {
    if (!TagData) {
      res.status(404).json({ message: " Tag Not found" });
      return;
    }
    res.json(TagData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
