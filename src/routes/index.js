const { Router } = require("express");
const router = Router();
const movieRouter = require("./movie");
const movieCategoryColumnRouter = require("./movie_category_column");

router.get("/", (req, res) => {
    res.send('hello trinity api');
});

router.use('/movies', movieRouter);
router.use('/movie_category_columns', movieCategoryColumnRouter);

router.get('*', (req, res) => {
  res.status(404).send('esta pag no existe');
})

module.exports = router;