const Movies = require('../models/Movie');

const Movie = {
  getAllMovies: async (req, res) => {
    const movies = await Movies.find()
    res.status(200).send(movies);
  },

  getMovie: async (req, res) => {
    const { id } = req.params
    const movie = await Movies.findOne({ _id: id })
    res.status(200).send(movie);
  },

  createMovie: async (req, res) => {
    const movie = new Movies(req.body)
    const savedMovie = await movie.save()
    res.status(201).send(savedMovie);
  },

  updateMovie: async (req, res) => {
    const { id } = req.params
    const movie = await Movies.findOne({ _id: id })
    Object.assign(movie, req.body)
    await movie.save()
    res.status(204).send(movie);
  },

  destroyMovie: async (req, res) => {
    const { id } = req.params;
    const movie = await Movies.deleteOne({ _id: id });

    if (movie) {
      res.sendStatus(200);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  }
}

module.exports = Movie;