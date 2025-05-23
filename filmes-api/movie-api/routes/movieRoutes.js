const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const moviesPath = path.join(__dirname, '..', 'movies.json');

router.get('/', (req, res) => {
  const movies = JSON.parse(fs.readFileSync(moviesPath));
  res.json(movies);
});

router.post('/', (req, res) => {
  const movies = JSON.parse(fs.readFileSync(moviesPath));
  const newMovie = req.body;
  newMovie.id = movies.length + 1;
  movies.push(newMovie);
  fs.writeFileSync(moviesPath, JSON.stringify(movies, null, 2));
  res.status(201).json(newMovie);
});

module.exports = router;