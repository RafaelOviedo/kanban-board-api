const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.send('hello trinity api');
});

router.get('*', (req, res) => {
  res.status(404).send('esta pag no existe');
})

module.exports = router;