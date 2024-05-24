const MoviesCategoryColumns = require('../models/MovieCategoryColumn');

const MoviesCategoryColumn = {
  getAllColumns: async (req, res) => {
    const columns = await MoviesCategoryColumns.find()
    res.status(200).send(columns);
  },

  getColumn: async (req, res) => {
    const { id } = req.params
    const column = await MoviesCategoryColumns.findOne({ _id: id })
    res.status(200).send(column);
  },

  createColumn: async (req, res) => {
    const column = new MoviesCategoryColumns(req.body)
    const savedColumn = await column.save()
    res.status(201).send(savedColumn);
  },

  updateColumn: async (req, res) => {
    const { id } = req.params
    const column = await MoviesCategoryColumns.findOne({ _id: id })
    Object.assign(column, req.body)
    await column.save()
    res.status(204).send(column);
  },

  destroyColumn: async (req, res) => {
    const { id } = req.params;
    const column = await MoviesCategoryColumns.deleteOne({ _id: id });

    if (column) {
      res.sendStatus(200);
    } else {
      res.status(404).json({ error: 'Column not found' });
    }
  }
}

module.exports = MoviesCategoryColumn;