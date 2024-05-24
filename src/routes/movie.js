const { Router } = require("express");
const router = Router();
const movie = require("../controllers/movie");

router.get('/', movie.getAllMovies);
router.get('/:id', movie.getMovie);

router.post('/', movie.createMovie);

router.patch('/:id', movie.updateMovie);

router.delete('/:id', movie.destroyMovie);

module.exports = router;
