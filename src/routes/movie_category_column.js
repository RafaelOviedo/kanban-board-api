const { Router } = require("express");
const router = Router();
const movieCategoryColumn = require("../controllers/movie_category_column");

router.get('/', movieCategoryColumn.getAllColumns);
router.get('/:id', movieCategoryColumn.getColumn);

router.post('/', movieCategoryColumn.createColumn);

router.patch('/:id', movieCategoryColumn.updateColumn);

router.delete('/:id', movieCategoryColumn.destroyColumn);

module.exports = router;
