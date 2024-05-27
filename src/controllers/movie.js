const Movies = require('../models/Movie');

const Movie = {
  getAllMovies: async (req, res) => {
    let { 
      category, 
      name, 
      year, 
      director, 
      page, 
      perPage 
    } = req.query;

    page = parseInt(page) || 1;
    perPage = parseInt(perPage) || 5;

    try {
      let movies = Movies.find();

      const skip = (page - 1) * perPage;

      if (category) { movies.where('category').equals(category) }
      if (name) { movies.where('name').regex(new RegExp(name, 'i')) } // Case-insensitive partial match 
      if (year) { movies.where('year').equals(parseInt(year)) } // Ensure year is an integer
      if (director) { movies.where('director').regex(new RegExp(director, 'i')) }

      const moviesQuery = await movies.find()
                                      .skip(skip)
                                      .limit(perPage)
                                      .exec();

      res.status(200).send(moviesQuery);

    } catch (error) {
        res.status(500).send({ error: error, message: 'Internal Server Error' });
    }
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