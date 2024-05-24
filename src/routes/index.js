const { Router } = require("express");
const router = Router();
const movieRouter = require("./movie");

router.get("/", (req, res) => {
    res.send('hello trinity api');
});

router.use('/movies', movieRouter);

router.get('*', (req, res) => {
  res.status(404).send('esta pag no existe');
})

module.exports = router;